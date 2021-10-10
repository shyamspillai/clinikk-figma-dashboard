import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'
import styled from 'styled-components'

const Sidebar = () => {

    const [isDropdownVisbile, setDropdownVisibility] = useState(false);

    return (
        <>
            <StyledSideBar className="single-nav menu">
                <ul>
                    <li><span className="nav-main-text baloo weight-700 size-70 font-white">F.</span></li>
                    <li>
                        <a href="#">
                            <i className="clinikk-icon-default fas font-white fa-home"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="clinikk-icon-default fas font-white fa-graduation-cap"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="clinikk-icon-default fas font-white fa-user"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="clinikk-icon-default fas font-white fa-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="clinikk-icon-default fas font-white fa-cog"></i>
                        </a>
                    </li>
                    <li></li>
                </ul>
                <span>
                    <a href="#"><i className="clinikk-icon-default fas font-white fa-sign-out-alt"></i></a>
                </span>
            </StyledSideBar>
            <StyledTopNavBar>
                <span className="nav-main-text baloo weight-700 size-60 font-white">F.</span>
                <MenuOutlined style={{ fontSize: 30, color: "#ffffff" }} onClick={() => setDropdownVisibility(!isDropdownVisbile)} />
            </StyledTopNavBar>
            <NavList isDropdownVisbile={isDropdownVisbile}>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="clinikk-icon-default fas font-white fa-home"></i> 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="clinikk-icon-default fas font-white fa-graduation-cap"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="clinikk-icon-default fas font-white fa-user"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="clinikk-icon-default fas font-white fa-envelope"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="clinikk-icon-default fas font-white fa-cog"></i>
                            </a>
                        </li>
                        <li></li>
                    </ul>
                </NavList>
        </>
    )
}

const NavList = styled.div`
    background-color: #000000;
    margin-bottom: 20px;
    padding: 0px 10px;
    display: ${props => props.isDropdownVisbile ? "flex" : "none"};

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        display: flex;
        flex-direction: column;
    
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    
        li {
            a {
                text-decoration: none;
                color: #353b48;
                padding: .6em 0em;
                display: block;
                transition: all 0.5s ease;
            }

            a: hover {
                background-color: #f5f6fa;
            }
        }
    }
`;

const StyledTopNavBar = styled.div`
    height: 50px;
    background-color: #000000;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 600px) {
        display: none;
    }
`

const StyledSideBar = styled.nav`
    height: 80vh;
    min-width: 100px;
    padding: 20px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
    overflow-y: auto;
    margin-left: 10px;
    z-index: 1;
    border-radius: 24px;
    margin-right: 20px;
    flex: 0.02;

    @media only screen and (max-width: 600px) {
        display: none;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        display: flex;
        flex-flow: column;
        max-width: 300px;
        max-height: 500px;
        height: 100%;
    
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    
        li {
            a {
                text-decoration: none;
                color: #353b48;
                padding: .6em 1em;
                display: block;
                transition: all 0.5s ease;
            }

            a: hover {
                background-color: #f5f6fa;
            }
        }
    }
`

export default Sidebar
