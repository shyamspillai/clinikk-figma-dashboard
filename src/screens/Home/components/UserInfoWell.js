import { Badge, Input, Avatar, Space, Dropdown, message, Menu, Image } from 'antd'
import { SearchOutlined, BellOutlined, UserOutlined } from '@ant-design/icons'
import CourseStat from './CourseStat'

import styled from 'styled-components'

const UserInfoWell = () => {

    function handleMenuClick(e) {
        
        message.info('Click on menu item.');
        console.log('click', e);
    }
        
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
            </Menu.Item>
        </Menu>
    );

    return (
        <UserInfoWellComponent>
            <UserSearchRow className="row">
                    <StyledSearch size="large" placeholder="" bordered={false} prefix={<SearchOutlined />} />
                    
                    <Badge count={5}>
                        <Avatar icon={<BellOutlined />} />
                    </Badge>

                    <Dropdown.Button 
                        overlay={menu}
                        placement="bottomRight"
                        size={"middle"}
                        icon={
                            <Image sizes={"small"} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }>
                    </Dropdown.Button>
                    
            </UserSearchRow>
            <div className="row full-width user-courses-stat-container">
                <CourseStat statNumber={5} statType={"Courses"} statStatus={"Completed"} />
                <CourseStat statNumber={11} statType={"Courses"} statStatus={"In Progress"} />
            </div>
        </UserInfoWellComponent>
    )
}

const UserInfoWellComponent = styled.div`
    flex: 0.45;
    max-width: 525px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 400px) {
        width: 300px !important;
        display: block;
    }
`;

const UserSearchRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-between;
    align-items: center;
`;

const StyledSearch = styled(Input)`
    background-color: #f5f5f7;
    border-radius: 15px;
    flex: 0.5
`

export default UserInfoWell
