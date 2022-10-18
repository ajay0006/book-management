import { Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return(
        <div className='container'>
            <Navbar className=''>
                <LinkContainer to="/">
                    <Navbar.Brand> D-Ajay's Book Library </Navbar.Brand>
                </LinkContainer>
            </Navbar>
            <Nav>
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link> Home </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="addBook">
                        <Nav.Link> Add Book </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </div>

    )
}

export default Header;