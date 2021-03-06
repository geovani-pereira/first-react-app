import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs';

createServer({

  models:{
    transactions:Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[{
        id:1,
        title:'Freelancer website',
        type:'deposit',
        amount: 6000,
        category: 'Dev',
        createdAt: new Date('2021-02-12 09:00:00')
      },
      {
        id:2,
        title:'Aluguel',
        type:'withdraw',
        amount: 1380,
        category: 'Casa',
        createdAt: new Date('2021-02-15 15:00:00')
      }
    ],
    })
  },
  routes(){
    this.namespace = 'api'

    this.get('/transactions', ()=>{
      return this.schema.all('transactions');
    });

    this.post('/transactions',(schema,request)=>{
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction',data);
    });
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);