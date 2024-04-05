import {AutoComplete, Flex, Layout, Menu} from "antd";
import { Link,Outlet } from "react-router-dom";
import LogoIfrn from "../../assets/LogoIfrn.png"

const {Sider, Content}=Layout;


function Base(){
    return(
            <Layout>
                <Sider theme="light">
                    {/* flexbox do antd */}
                    <Flex justify="center" style={{margin:10}}>
                        <img src={LogoIfrn} alt ="LogoIfrn" style={{width:200}}/>
                    </Flex>
                    <Menu  mode="inline">
                        <Menu.Item key="home">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="turmas">
                            <Link to="/turmas">Turmas</Link>
                        </Menu.Item>
                        <Menu.Item key="alunos">
                            <Link to="/alunos">Alunos</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style = {{minHeight:"87vh", margin:"10px"}}>
                    <Outlet/>
                </Content>
            </Layout>


    );
}
export default Base;