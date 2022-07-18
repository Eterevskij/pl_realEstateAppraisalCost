import 'antd/dist/antd.css';
import './App.css';
import EstateAppraisalCostCard from './components/EstateAppraisalCostCard';
import EditBank from './components/modals/EditBank';
import AddBank from './components/modals/AddBank';
import DeleteConfirm from './components/modals/DeleteConfirm';
import EditConfirm from './components/modals/EditConfirm';
import CardHeader from './components/CardHeader';
import { ReactComponent as Logo } from './icons/OrganisationLogo.svg';




function App() {
  return (
    <div className="App">
      <div className="container">
        <CardHeader totalText='Банков' totalNum='8' />
        <EstateAppraisalCostCard companyName='Личное пользование' Logo={<Logo />} table={[{price: 2500, format: 'electronic'}, {price: 5500, format: 'printed'}]}  />
        {/* <EditBank /> */}
        {/* <AddBank />  */}
        {/* <DeleteConfirm /> */}
        {/* <EditConfirm /> */}
      </div>
    </div>
  );
}

export default App;
