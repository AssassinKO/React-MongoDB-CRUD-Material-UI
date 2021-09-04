import * as dataController from './controllers/recordController';

const router = (app) => {

  app.get('/api/getrecord', dataController.getAll);
  app.put('/api/insertrecord', dataController.createOne);
  app.delete('/api/deleterecord/:ids', dataController.deleteOne);
  app.post('/api/updaterecord/:condition', dataController.updateOne);
}
export default router;
