
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import DashboardMainContent from './DashboardMainContent';
import CalendarView from './CalendarView';

function App() {
    return (
        <div className='container'>
            <Header />

            <div className='row-innercontainer'>
                <div className='col-2'>
                    <Sidebar /> </div>
                <div className='col-6'>
                    <DashboardMainContent />
                </div>
                <div className='col-4'>
                    <CalendarView/>
                </div>
            </div>
        </div>


    )
}

export default App
