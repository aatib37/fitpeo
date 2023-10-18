import React from 'react';
import SearchBar from './SearchBar';


 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { AiOutlineDollarCircle ,AiOutlineContainer,AiOutlineArrowUp,AiOutlineArrowDown,AiOutlineShopping ,AiOutlineWallet} from "react-icons/ai";
 import { BsChevronDown } from "react-icons/bs";
 import product1 from './product1.jpg';
 import product2 from './product2.jpg';

function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
      

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <AiOutlineDollarCircle className='card_icon card_icon1'/>
                    <div>
                      <h3><span className='card_span1'>Earning</span><br/>$198k</h3>
                      <p ><AiOutlineArrowUp className='up_icon' /><span className='green'>37.8%</span> this month</p>
                    </div>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                   <AiOutlineContainer className='card_icon card_icon2'/>
                    <div>
                      <h3><span className='card_span1'>Orders</span><br/>$2.4k</h3>
                      <p ><AiOutlineArrowDown className='down_icon' /><span className='red'>2%</span> this month</p>
                    </div>
                </div>
               
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <AiOutlineWallet className='card_icon card_icon3'/>
                    <div>
                      <h3><span className='card_span1'>Balance</span><br/>$2.4k</h3>
                      <p><AiOutlineArrowDown className='down_icon' /><span className='red'>2%</span> this month</p>
                    </div>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <AiOutlineShopping className='card_icon card_icon4'/>
                    <div>
                      <h3><span className='card_span1'>Total Sales</span><br/>$89k</h3>
                      <p><AiOutlineArrowUp className='up_icon' /><span className='green'>11%</span> this month</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%" className='graph1'>
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%" className='graph2'>
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
               
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
        <div className='table'>
          <div className='header_table'>
            <h2>Product Sell</h2>
            <div className='header_side'>
                <SearchBar />
                <span className='header-span'>Last 30 days <BsChevronDown className='down' /></span>
            </div>
          </div>
          <table className='table-inner'> 
                  <thead>
                    <tr className='tr1'>
                    <th className='th-width'>Product Name</th>
                      <th className='th-width2'>Stock</th>
                      <th className='th-width2'>Price</th>
                      <th className='th-width2'>Total Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td className='td'>
                        <img src={product1} alt='product1' className='product1'/>
                          <div>
                              <h3>Abstract</h3>
                              <span className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </span>
                          </div>
                      </td>
                      <td >32 in Stock</td>
                      <td >$45.99</td>
                      <td className='td-center'>20</td>

                      </tr>
                      <tr>
                      <td className='td'>
                        <img src={product2} alt='product1' className='product1'/>
                          <div>
                              <h3>Abstract</h3>
                              <span className='lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </span>
                          </div>
                      </td>
                      <td >32 in Stock</td>
                      <td >$45.99</td>
                      <td className='td-center'>20</td>

                      </tr>
                  </tbody>
                  
                 
                  
                </table>

        </div>
    </main>
  )
}

export default Home