import {Button, Menu, Space} from "antd";
import { HomeOutlined, PieChartOutlined, UserOutlined} from '@ant-design/icons'
import 'antd/dist/reset.css';

import classes from './SideBar.module.css'

function SideBar({actualPage,setActualPage}){

      const items = [
        {label:"Home",key:"1",icon: <HomeOutlined></HomeOutlined>},
        {label:"Cadastrar",key:"2",icon: <PieChartOutlined></PieChartOutlined>},
        {label:"Listar",key:"3",icon: <UserOutlined></UserOutlined>},
      ];

    function changePage(e){
      setActualPage(e.key);
    }

    return (
        <Space>
          <Menu theme="dark" onClick={changePage} defaultSelectedKeys={['1']} mode="inline" items={items}></Menu>
        </Space>
    );
}

export default SideBar;