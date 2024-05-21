import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Footer from '../common/Navbar/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import Menu_cart from './Menu_cart';
import Booking from '../common/Booking/Booking';
import { Helmet } from 'react-helmet';

const Menu_Page = () => {
    // data fatching operation 
    const loadData = useLoaderData();
    const maki = loadData[0].maki
    const uramaki = loadData[1].uramaki
    const roll = loadData[2].special_rolls



    console.log(roll);

    return (
        <div className="flex-home">
            <Helmet><title>Sushi || Menu</title></Helmet>
            {/* left side  */}
            <div className="menu-left menu-bg">
                <h1>Menu</h1>
            </div>

            {/* right side  */}
            <div className="right-flex">
                
                <Tabs className='w-full'>
                    <TabList className='tab-head'>
                        <Tab className='tab-sub-head'>MAKI</Tab>
                        <Tab className='tab-sub-head'>URAMAKI</Tab>
                        <Tab className='tab-sub-head'>SPECIAL ROLLS</Tab>
                    </TabList>

                    {/* ITEM 1 */}
                    <TabPanel className=''>
                        <div className="title"><h3>MAKI</h3></div>
                        <div className="space-y-7">
                            {
                                maki.map((data, i) => <Menu_cart key={i} data={data}></Menu_cart>)
                            }
                        </div>
                    </TabPanel>

                    {/* Menu 2 */}
                    <TabPanel className=''>
                        <div className="title"><h3>URAMAKI</h3></div>
                        <div className="space-y-7 ">
                            {
                                uramaki.map((data, i) => <Menu_cart key={i} data={data}></Menu_cart>)
                            }
                        </div>
                    </TabPanel>

                    {/* Menu 3 */}
                    <TabPanel className=''>
                        <div className="title"><h3>SPECIAL ROLLS</h3></div>

                        <div className="space-y-7 ">
                            {
                                roll.map((data, i) => <Menu_cart key={i} data={data}></Menu_cart>)
                            }
                        </div>
                    </TabPanel>
                    
                    <Booking></Booking>
                    <Footer></Footer>
                </Tabs>

            </div>

        </div>
    );
};

export default Menu_Page;