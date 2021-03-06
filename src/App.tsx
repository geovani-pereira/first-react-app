
import Modal from 'react-modal'
import { GlobalStyle } from './styles/global'
import {Header} from './components/Header'
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  
  Modal.setAppElement('#root')
  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

     <Dashboard/>

     <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}
      />

     <GlobalStyle />
     </>
  );
}