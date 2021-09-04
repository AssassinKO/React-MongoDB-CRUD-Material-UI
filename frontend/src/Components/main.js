import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './main.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import PlaceIcon from '@material-ui/icons/Place';
import DeleteSharp from '@material-ui/icons/Delete';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'date', numeric: false, disablePadding: true, label: 'Date',cssClass: "oneCell" },
  { id: 'state', numeric: true, disablePadding: false, label: 'State',cssClass: "oneCell" },
  { id: 'cases', numeric: true, disablePadding: false, label: 'Cases',cssClass: "oneCell" },
  { id: 'deaths', numeric: true, disablePadding: false, label: 'Deaths',cssClass: "oneCell" },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" style={{backgroundColor: "#d3d3d3"}} >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{backgroundColor: "#d3d3d3"}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="right" style={{backgroundColor: "#d3d3d3"}}>Update/Delete</TableCell>
      </TableRow>
    </TableHead>
  );
}
EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  oneCell: {
    width: "20%"
  }
}));

export default function RecordManagement() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [rows, setRow] = useState([]);
  const [copyRows, setCopyRows] = useState([]);
  const [valueObj, handleValObj] = useState({date: "", state: "", cases: "", deaths: ""});
  const [vals, handleVals] = useState({});
  const [updateNumber, setUpdateNumber] = useState(0);
  const [filterObj, setFilterObj] = useState({date: "", state: "", cases: "", deaths: ""});

  useEffect(()=>{
    var arr = new Array();
    rows.map((row)=>{      
      if(typeof row.date == 'string' && typeof row.state == 'string'  && typeof row.cases == 'string'  && typeof row.deaths == 'string' ) {

        if((row.date.indexOf(filterObj.date) > -1) && (row.state.indexOf(filterObj.state) > -1) && (row.cases.indexOf(filterObj.cases) > -1) && (row.deaths.indexOf(filterObj.deaths) > -1)){
          arr.push(row);
        }
      }
    });
    setRow(arr);
  }, [filterObj])
  useEffect(()=>{
    axios
    .get('http://localhost:3300/api/getrecord')
    .then((resposne)=>{
      setRow(resposne.data.records);
      setCopyRows(resposne.data.records);

    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  },[])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, _id) => {
    const selectedIndex = selected.indexOf(_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (_id) => selected.indexOf(_id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangeValue=(e, valueKey)=> {
    if(valueKey === "state") {
      handleValObj({...valueObj, state: e.target.value});
    }
    else if(valueKey === "cases") {
      handleValObj({...valueObj, cases: e.target.value});
    }
    else if(valueKey === "deaths") {
      handleValObj({...valueObj, deaths: e.target.value});
    }
    else if(valueKey === "date") {
      handleValObj({...valueObj, date: e.target.value});
    }
  }

  const handleUpdateChange=(e, key)=> {
    if(key === "date") {
      handleVals({...vals, date: e.target.value});
    }
    else if(key === "state") {
      handleVals({...vals, state: e.target.value});
    }
    else if(key === "cases") {
      handleVals({...vals, cases: e.target.value});
    }
    else if(key === "deaths") {
      handleVals({...vals, deaths: e.target.value});
    }
  }

  const handleClickInsert=()=> {
    axios.
        put('http://localhost:3300/api/insertrecord', valueObj)
          .then((response) => {
            if(response.data.success) {
              alert("Inserted Successfully!");
              axios
              .get('http://localhost:3300/api/getrecord')
              .then((resposne)=>{
                setRow(resposne.data.records);
                setCopyRows(resposne.data.records);
          
              })
              .catch(error => {
                console.error('There was an error!', error);
              });
            }
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
    }

  const handleClickUpdate=(index_num)=> {
    handleVals(rows[index_num]);
    setUpdateNumber(index_num);
  }

  const handleUpdate=()=> {
    let condition = rows[updateNumber]._id;
    axios
        .post(`http://localhost:3300/api/updaterecord/${condition}`, vals)
        .then(response => {
          if(response.data.success) {
            alert("Updated Successfully!")
            let arr = [];
            rows.map((item, index) => {
              if(index == updateNumber) {
                item = vals;
              }
              arr.push(item);
            });
            setRow(arr);
            setCopyRows(arr);
            setFilterObj({date: "", state: "", cases: "", deaths: ""})
            axios
            .get('http://localhost:3300/api/getrecord')
            .then((resposne)=>{
              setRow(resposne.data.records);
              setCopyRows(resposne.data.records);     
            })
            .catch(error => {
              console.error('There was an error!', error);
            });
            
          }
        })
        .catch(error => {
          console.error('There was an error!', error);
      });
  }

  const handleClickDelete=(index_num)=> {
    let isDelete = window.confirm("Are you really delete?");
    if(isDelete) {
      let condition = rows[index_num]._id;
      axios
        .delete(`http://localhost:3300/api/deleterecord/${condition}`)
        .then(response => {
          if(response.data.success) {
            alert("Deleted successfully!");
            axios
            .get('http://localhost:3300/api/getrecord')
            .then((resposne)=>{
              setRow(resposne.data.records);
              setCopyRows(resposne.data.records);     
              setFilterObj({date: "", state: "", cases: "", deaths: ""})

            })
            .catch(error => {
              console.error('There was an error!', error);
            });
          }
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  }


  const handleFilterChange=(e, key)=> {
    setRow(copyRows);
    console.log(copyRows);
    if(key === "date") {
      setFilterObj({...filterObj, date: e.target.value});
    }
    else if(key === "state") {
      setFilterObj({...filterObj, state: e.target.value});
    }
    else if(key === "cases") {
      setFilterObj({...filterObj, cases: e.target.value});
    }
    else if(key === "deaths") {
      setFilterObj({...filterObj, deaths: e.target.value});
    }

  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <button className="insertButton btn btn-primary" type="button" data-toggle="modal" data-target="#insertData">Insert</button>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="left"><input type="text" value={filterObj.date} className="form-control" onChange={(e)=> {handleFilterChange(e, "date")}}   placeholder="filter date..." /></TableCell>
                <TableCell align="left"><input type="text" value={filterObj.state } className="form-control" onChange={(e)=> {handleFilterChange(e, "state")}}  placeholder="filter state..." /></TableCell>
                <TableCell align="left"><input type="text" value={filterObj.cases}className="form-control" onChange={(e)=> {handleFilterChange(e, "cases")}}  placeholder="filter cases..." /></TableCell>
                <TableCell align="left"><input type="text"  value={filterObj.deaths}className="form-control" onChange={(e)=> {handleFilterChange(e, "deaths")}} placeholder="filter deaths..." /></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          onClick={(event) => handleClick(event, row._id)}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.date}
                      </TableCell>
                      <TableCell align="right">{row.state}</TableCell>
                      <TableCell align="right">{row.cases}</TableCell>
                      <TableCell align="right">{row.deaths}</TableCell>
                      <TableCell align="right">
                        <button onClick={()=> {handleClickUpdate(index)}} className="updatebutton btn btn-primary" type="button" data-toggle="modal" data-target="#updateData"><PlaceIcon></PlaceIcon></button>
                        <button onClick={(e)=> {handleClickDelete(index)}} className="deletebutton btn btn-danger"><DeleteSharp></DeleteSharp></button>
                      </TableCell>
                    </TableRow>
                  );
                }
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div>
        <div className="modal fade" id="insertData">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Insert Data</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <div>
                <input type="date" className="form-control" placeholder="2020-1-1"  onChange={(e)=> {handleChangeValue(e, "date")}} /><br />
                <input type="text" className="form-control" placeholder="Washington" onChange={(e)=> {handleChangeValue(e, "state")}} /><br />
                <input type="text"  className="form-control" placeholder="cases" onChange={(e)=> {handleChangeValue(e, "cases")}} /><br />
                <input type="text"  className="form-control" placeholder="deaths" onChange={(e)=> {handleChangeValue(e, "deaths")}}  /><br />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" onClick={handleClickInsert} className="btn btn-success" data-dismiss="modal">Insert</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="updateData">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Update Data</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <div>
                  <input type="date" className="form-control" defaultValue={vals.date} onChange={(e)=> {handleUpdateChange(e, "date")}} min="1/1/2020" max="1/1/2100" /><br />
                  <input type="text" className="form-control" defaultValue={vals.state} onChange={(e)=> {handleUpdateChange(e, "state")}} /><br />
                  <input type="text" className="form-control" defaultValue={vals.cases} onChange={(e)=> {handleUpdateChange(e, "cases")}} /><br />
                  <input type="text" className="form-control" defaultValue={vals.deaths} onChange={(e)=> {handleUpdateChange(e, "deaths")}} /><br />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" onClick={handleUpdate} className="btn btn-primary" data-dismiss="modal">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
