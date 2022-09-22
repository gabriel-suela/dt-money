import { useState } from 'react'
import { Dashboard } from './components/Dasboard'
import { Header } from './components/Header'
import { GlobalStyle} from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './TransactionsContext'


export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  
  const handleOpenNewTransactionModal = () => {
      setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
       <Header 
       onOpenNewTransactionModal={handleOpenNewTransactionModal}
       />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}

      />

       <Dashboard/>


      <GlobalStyle/> 
    </TransactionsProvider>
    
  ) 
}


