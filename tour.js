[
    {
		"key": "B002RL8IYK",        
        "name": "Acer Aspire A10",        
        "star": 4, 
"Price": "$22",		
        "img": "https://cdn.shopify.com/s/files/1/0062/9823/9023/products/1-1-900x900_450x450.jpg?v=1525718227",
		"Description": "Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience"		
        
    },
    {
	
	"key": "B002RL8IYK",        
        "name": "Acer Aspire Desktop",        
        "star": 5, 
"Price": "$22",		
        "img": "https://cdn.shopify.com/s/files/1/0062/9823/9023/products/2-2-900x900_28808d54-d8c2-446e-89d4-ae30f92cd8cd_450x450.jpg?v=1525718518",
		"Description": "Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience"
    },
    {
	"key": "B002RL8IYK",        
        "name": "Aspire E15",        
        "star": 3,
		"Price": "$22",
        "img": "https://cdn.shopify.com/s/files/1/0062/9823/9023/products/3-3-900x900_561829d7-2022-45af-ac9b-d896cd72a39b_450x450.jpg?v=1525718852",
		"Description": "Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience"
    },
    {
	"key": "B002RL8IYK",        
        "name": "Apple Ipad Aire 2",        
        "star": 5,  
"Price": "$22",		
        "img": "https://cdn.shopify.com/s/files/1/0062/9823/9023/products/5-5-900x900_92c73ad2-4423-4b07-a0c0-d453d39a4c63_450x450.jpg?v=1525719408",
		"Description": "Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience"
    },
    {
	"key": "B002RL8IYK",        
        "name": "Asus UX360CA",        
        "star": 3, 
		"Price": "$22",
        "img": "https://cdn.shopify.com/s/files/1/0062/9823/9023/products/7-7-900x900_450x450.jpg?v=1525719855",
		"Description": "Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience"
    },
    
	{
	"key": "B002RL8IYK",        
        "name": "Asus Zenbook",        
        "star": 3,  
"Price": "$22",		
        "img": "https://cdn.shopify.com/s/files/1/0062/9823/9023/products/8-8-900x900_ab96f7e3-f775-4be6-bc57-d4746ec341ae_450x450.jpg?v=1525720182",
		"Description": "Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience."
    },
	{ 
	"key": "B002RL8IYK",        
        "name": "Asus ZenPad 3S",        
        "star": 3, 
"Price": "$22",		
        "img": "https://cdn.shopify.com/s/files/1/0062/9823/9023/products/9-9-900x900_9f8599b8-64ae-4ba7-9612-ed114f61c4e8_450x450.jpg?v=1525720300",
		"Description": "Watch music videos and streaming content in awe-inspiring high definition clarity for a mobile experience"
    },
	{
	"key": "B002RL8IYK",        
        "name": "Conocord Watch",        
        "star": 3, 
"Price": "$22",		
        "img": "https://m.media-amazon.com/images/I/71pqiAEm5tL._AC_UL1498_.jpg",
		"Description": "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus."
		
    },
	{
	"key": "B002RL8IYK",        
        "name": "Tommy Bahama",        
        "star": 3,  
"Price": "$22",		
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwXBWDUxKJJ6o0JbPJOIOHfSQjuzAmf0lFw&usqp=CAU",
		"Description": "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus."
    },
	{
	"key": "B002RL8IYL",        
        "name": "Tommy Watch",        
        "star": 3,  
"Price": "$22",		
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwXBWDUxKJJ6o0JbPJOIOHfSQjuzAmf0lFw&usqp=CAU",
		"Description": "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus."
    }
]







import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link Nav.Linkhref="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;