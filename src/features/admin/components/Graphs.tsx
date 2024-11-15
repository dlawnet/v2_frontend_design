import React, { PureComponent } from "react";
import {
  Area,
  AreaChart,
  BarChart, 
  Bar,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface GraphData {
  day: string;
  users: number;
}

interface GraphProps {}

interface GraphState {
  selectedCategory: string;
  dataKey: string;
}

const data: GraphData[] = [
    { day: "Sunday", users: 500,  },
    { day: "Monday", users: 1400,  },
    { day: "Tuesday", users: 900,  },
    { day: "Wednesday", users: 1200,  },
    { day: "Thursday", users: 1580,  },
    { day: "Friday", users: 1390,  },
    { day: "Saturday", users: 1990,  },
    { day: "Sunday", users: 1890,  },
];

const totalRevenueData = [
    { name: 'Jan', Sales: 4000, Returns: 2400, amt: 2400 },
    { name: 'Feb', Sales: 3000, Returns: 1398, amt: 2210 },
    { name: 'Mar', Sales: 2000, Returns: 9800, amt: 2290 },
    { name: 'Apr', Sales: 2780, Returns: 3908, amt: 2000 },
    { name: 'May', Sales: 1890, Returns: 4800, amt: 2181 },
    { name: 'Jun', Sales: 2390, Returns: 3800, amt: 2500 },
    { name: 'Jul', Sales: 3490, Returns: 4300, amt: 2100 },
    { name: 'Aug', Sales: 4000, Returns: 2400, amt: 2400 },
    { name: 'Sept', Sales: 3000, Returns: 1398, amt: 2210 },
    { name: 'Oct', Sales: 2000, Returns: 9800, amt: 2290 },
    { name: 'Nov', Sales: 2780, Returns: 3908, amt: 2000 },
    { name: 'Dec', Sales: 1890, Returns: 4800, amt: 2181 },
];

const barData = [
    {  name: 'Sun', uv: 4000, pv: 2400, amt: 2400, },
    {  name: 'Mon', uv: 3000, pv: 1398, amt: 2210, },
    {  name: 'Tue', uv: 2000, pv: 4800, amt: 2290, },
    {  name: 'Wed', uv: 2200, pv: 1300, amt: 2290, },
    {  name: 'Thur', uv: 2900, pv: 1900, amt: 2290, },
    {  name: 'Fri', uv: 3200, pv: 2300, amt: 2290, },
    {  name: 'Sat', uv: 2500, pv: 1500, amt: 2290, },
  ];

  const accountData = [
    { name: 'Sun', Sales: 500, Returns: 200 },
    { name: 'Mon', Sales: 1100, Returns: 1098 },
    { name: 'Tue', Sales: 1990, Returns: 1200 },
    { name: 'Wed', Sales: 2780, Returns: 2008 },
    { name: 'Thur', Sales: 3890, Returns: 1800 },
    { name: 'Fri', Sales: 3690, Returns: 1900 },
    { name: 'Sat', Sales: 2590, Returns: 2300 },
    { name: 'Sun', Sales: 900, Returns: 500 },
  ];

  const emailData = [
    { name: 'Jan', Open: 4000, Bounce: 2400, Clickthrough: 2400 },
    { name: 'Feb', Open: 3000, Bounce: 1398, Clickthrough: 2210 },
    { name: 'Mar', Open: 2000, Bounce: 9800, Clickthrough: 2290 },
    { name: 'Apr', Open: 2780, Bounce: 3908, Clickthrough: 6000 },
    { name: 'May', Open: 1890, Bounce: 4800, Clickthrough: 2181 },
    { name: 'Jun', Open: 2390, Bounce: 3800, Clickthrough: 4500 },
    { name: 'Jul', Open: 3490, Bounce: 4300, Clickthrough: 2100 },
    { name: 'Aug', Open: 4000, Bounce: 2400, Clickthrough: 3400 },
    { name: 'Sept', Open: 3000, Bounce: 1398, Clickthrough: 2210 },
    { name: 'Oct', Open: 2000, Bounce: 9800, Clickthrough: 5290 },
    { name: 'Nov', Open: 2780, Bounce: 3908, Clickthrough: 7000 },
    { name: 'Dec', Open: 1890, Bounce: 4800, Clickthrough: 5181 },
];

export class TopUpChart extends PureComponent<GraphProps, GraphState> {
  constructor(props: GraphProps) {
    super(props);
    this.state = {
      selectedCategory: "Sales",
      dataKey: "users",
    };
  }

  render() {
    // const { selectedCategory, dataKey } = this.state;
    const { dataKey } = this.state;
    
    return (
      <>
        <ResponsiveContainer width="100%" height="100%" z-index="20">
          <AreaChart
            width={500}
            height={400}
            z-index={200}
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#21afeb" />
                <stop offset="40%" stopColor="#6EC8EF" />
                <stop offset="70%" stopColor="#b4dff1" />
                <stop offset="90%" stopColor="#fff" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
            
            <XAxis
              dataKey="day"
              tick={{ fontSize: 10, fill:'darkgray'}}
            />

            <Tooltip/>
            <Area type="monotone" dataKey={dataKey} stroke="#2D9CDB" strokeWidth={3} activeDot={{ r: 8 }} spacing={0} fill="url(#gradient)"/>

            </AreaChart>
          </ResponsiveContainer>
          </>
      );
    }
};

export class LineBar extends PureComponent {
    renderTooltip = (props:any) => {
        if (!props.active || !props.payload) return null;
    
        return (
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '50%',
              width: '12px',
              height: '12px',
              border: '5px solid #fff',
            }}
          ></div>
        );
    };

    render() {
      return (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={totalRevenueData}
            margin={{ top: 20, right: 10, left: -10, bottom: -10 }}
          >     
                <defs>
                    <linearGradient id="gradientReturns" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FDDF5A" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#FDDF5A" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradientSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#491217" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#491217" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <CartesianGrid vertical={true} horizontal={false} stroke="#FDDF5A" />

                <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tick={{ fontSize: 15, fill:'#491217'}}    
                />

                <YAxis 
                    axisLine={false}
                    tick={{ fontSize: 12, fill:'#491217'}}
                />

                <Tooltip/>

                <Line
                    type="monotone"
                    dataKey="Returns"
                    stroke="#FDDF5A"
                    strokeWidth={5}
                    activeDot={{ r: 8 }}
                    dot={false}
                    fill="url(#gradientReturns)"
                    fillOpacity={0.5}
                />
                <Line
                    type="monotone"
                    dataKey="Sales"
                    stroke="#491217"
                    strokeWidth={5}
                    activeDot={{ r: 8 }}
                    dot={false}
                    fill="url(#gradientSales)"
                    fillOpacity={0.5}
                />
          </LineChart>
        </ResponsiveContainer>
      );
    }
};

export class Barchart extends PureComponent {

    render() {
      return (
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={barData}>
              <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tick={{ fontSize: 12, fill:'darkgray'}}
              />
              <Bar dataKey="uv" fill="#FF5B5B" barSize={10} />
              <Bar dataKey="pv" fill="#F7C604" barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      );
    }
};

export class AccountGraph extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height={150}>
        <LineChart
          data={accountData}
          margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" stroke="#D0D6DE"/>
            <XAxis 
                dataKey="name" 
                axisLine={false}
                tick={{ fontSize: 11, fill:'darkgray'}}    
            />
            <Tooltip />
            <Line type="monotone" dataKey="Sales" stroke="#00B074" strokeWidth={3} activeDot={{ r: 8 }} dot={false}/>
            <Line type="monotone" dataKey="Returns" stroke="#FF5B5B" strokeWidth={3} activeDot={{ r: 8 }} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
};

export class EmailGraph extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={emailData}
          margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
        >
            <XAxis 
                dataKey="name" 
                axisLine={false}
                tick={{ fontSize: 11, fill:'darkgray'}}    
            />
            <YAxis 
                axisLine={false}
                tick={{ fontSize: 12, fill:'darkgray'}}
            />
            <Tooltip />
            <Line type="monotone" dataKey="Bounce" stroke="#FF5B5B" strokeWidth={3} activeDot={{ r: 8 }} dot={false}/>
            <Line type="monotone" dataKey="Open" stroke="#2D9CDB" strokeWidth={3} activeDot={{ r: 8 }} dot={false}/>
            <Line type="monotone" dataKey="Clickthrough" stroke="#03FC2B" strokeWidth={3} activeDot={{ r: 8 }} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
};