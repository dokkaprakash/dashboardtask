import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { BsFillHouseFill,BsSearch,BsCardList,BsFillPersonFill } from 'react-icons/bs';
import { FaAddressCard } from "react-icons/fa";
import 'react-circular-progressbar/dist/styles.css';
import { FaCaretDown } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis,
	CartesianGrid,ResponsiveContainer } from 'recharts';

import './index.css'

const Chart = () => {

	const barChartData = [{name:"Average",percentage:78},{name:"Top",percentage:95},{name:"Me",percentage:59}]
	// Sample data
	const data = [
		{ name: '20', x: 10, y: 10, z: 10 },
		{ name: "",  x: 15, y: 15, z: 15 },
		{ name: '25',  x:20, y: 20, z: 20 },
		{ name: '',  x: 25, y: 25, z: 25 },
		{ name: '30', x: 30, y: 30, z: 30 },
		{ name: '', x: 35, y: 35, z: 35 },
		{ name: '35', x: 40, y: 40, z: 40 },
		{ name: '', x: 45, y: 45, z: 45 },
		{ name: '40', x: 50, y: 50, z: 50 },
		{ name: '', x: 55, y: 55, z: 55 },
		{ name: '60', x: 60, y: 60, z: 60 },
		{ name: '', x: 65, y: 65, z: 65 },
		{ name: '65', x: 70, y: 70, z: 70 },
	];
	const updatedData = [
		{ name: '20', x: 10, y: 10, z: 10 },
		{ name: "35",  x: 15, y: 15, z: 15 },
		{ name: '40',  x:20, y: 20, z: 20 },
		{ name: '45',  x: 25, y: 25, z: 25 },
		{ name: '50', x: 30, y: 30, z: 30 },
		{ name: '55', x: 35, y: 35, z: 35 },
		{ name: '60', x: 40, y: 40, z: 40 },
	];
	return (
		<>
	  <div className='chart-section-container'>
		<div className='d-flex flex-column top-container'>
			<p style={{fontSize:"12px",fontWeight:500,color:'blue'}}>Retirement Income</p>
			<p style={{fontSize:"20px",fontWeight:500}}>Starting Year 2056</p>
			<div className='income-details-container'>
				<div className='mr-4'>
					<p className='amount' style={{fontSize:"25px"}}>$300,000</p>
					<p>My Goal</p>
					<hr className='horizontal-line'/>
				</div>
				<div className='income-container'>
					<div className='mr-4'>
						<p className='amount'style={{fontSize:"25px"}}>59%</p>
						<p>Goal Achieved</p>
						<hr className='horizontal-line'/>
					</div>
					<div className='ml-4'>
						<p className='amount' style={{fontSize:"25px"}}>$300</p>
						<p>Est. Monthly Income</p>
						<hr className='horizontal-line'/>
					</div>
				</div>
			</div>
		</div>
		<div className='middle-section'>
			<h1 className='bottom-heading'>Contributions Overtime</h1>
			<div className='d-lg-block d-none'>
				<div className='contribution-container'>
					<p style={{fontSize:"13px",marginRight:"7px"}}><span style={{backgroundColor:'#2e20d7'}} className='span-dot' ></span><span>Employer: </span>K 73,500</p>
					<p style={{fontSize:"13px",marginRight:"7px"}}><span style={{backgroundColor:'#4d44b7'}} className='span-dot'></span><span>Employee: </span>K 52,500</p>
					<p style={{fontSize:"13px"}}><span style={{backgroundColor:'#7eb6d9'}} className='span-dot'></span><span>Total Interest: </span>K 244,313</p>
				</div>
			</div>
			<div className='d-lg-none'>
				<div className='d-flex flex-row'>
					<div style={{fontSize:"13px",marginRight:"13px"}}>
						<p style={{fontSize:"9px",marginRight:"7px"}}><span style={{backgroundColor:'#2e20d7'}} className='span-dot' ></span></p>
						<p><span>Employer: </span></p>
						<p>K 73,500</p>
					</div>
					<div style={{fontSize:"13px",marginRight:"13px"}}>
						<p style={{fontSize:"9px",marginRight:"7px"}}><span style={{backgroundColor:'#2e20d7'}} className='span-dot' ></span></p>
						<p><span>Employee: </span></p>
						<p>K 52,500</p>
					</div>
					<div style={{fontSize:"13px",marginRight:"13px"}}>
						<p style={{fontSize:"9px",marginRight:"7px"}}><span style={{backgroundColor:'#2e20d7'}} className='span-dot' ></span></p>
						<p><span>Total Interest: </span></p>
						<p>K 244,313</p>
					</div>
				</div>
			</div>
			<div className='d-none d-lg-block'>
				<BarChart width={400} height={200} data={data} >
				<CartesianGrid />
					<XAxis dataKey="name" />
					<YAxis  />
					<Bar dataKey="x" stackId="a" fill="#2e20d7" />
					<Bar dataKey="y" stackId="a" fill="#4d44b7" />
					<Bar dataKey="z" stackId="a" fill="#7eb6d9" />
				</BarChart>
			</div>
			<div className='d-lg-none text-center'>
			<ResponsiveContainer width={220} height={170}>
				<BarChart  data={updatedData} >
				<CartesianGrid />
					<XAxis dataKey="name" />
					<YAxis  />
					<Bar dataKey="x" stackId="a" fill="#2e20d7" />
					<Bar dataKey="y" stackId="a" fill="#4d44b7" />
					<Bar dataKey="z" stackId="a" fill="#7eb6d9" />
				</BarChart>
			</ResponsiveContainer>
			</div>
			
		</div>
		
		<div className='d-lg-block d-none'>
		<div className='bottom-section-container'>
			<h1 className='bottom-heading'>How do I compare my peers?</h1>
			<p className='description'>These numbers represent current goal achievement</p>
			<div className='progressbar-section'>
				<div>
					<p className='heading'>Age: Under 30 <FaCaretDown/></p>
					<hr/>
					<p className='heading'>Salary: K 20 - K 30 <FaCaretDown/></p>
					<hr/>
					<p className='heading'>Gender: Male <FaCaretDown/></p>
					<hr/>
				</div>
				<div className='bar-container'>
					{barChartData.map(item=>{return(
					<div className='circular-bar' >
						<CircularProgressbar value={item.percentage} text={`${item.percentage}%`} />
						<p >{item.name}</p>
					</div>
					)})}
				</div>
			</div>
		</div>
		
		</div>
		<div className='d-lg-none'>
			<div className="mobile-icons-container" >
						<div className='mobile-home-icon'><BsFillHouseFill size={25}/></div>
						<div className='mobile-icon'><BsCardList size={25}/></div>
						<div className='mobile-icon'><FaAddressCard size={25}/></div>
						<div className='mobile-icon'><BsFillPersonFill size={25}/></div>  
						<div className='mobile-icon'><BsSearch size={25}/></div>
					</div>
			</div>
		</div>
		
		</>
	);
}

export default Chart;
