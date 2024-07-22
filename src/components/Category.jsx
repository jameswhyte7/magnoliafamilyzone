// import React, { useState } from 'react'
// import { Navbar, Container, ButtonGroup, Button } from 'react-bootstrap';

// const Category = () => {
//     const [activeFilter, setActiveFilter] = useState('All');

//     const handleFilterChange = (filter) => {
//         setActiveFilter(filter);
//         // Add your filter logic here
//         console.log(`Filter changed to: ${filter}`);
//     };

//     return (
//         <Navbar bg="light" expand="lg">
//             <Container>
//                 <ButtonGroup className="mx-auto flex-sm-row">
//                     <Button
//                         variant={activeFilter === 'All' ? 'primary' : 'light'}
//                         onClick={() => handleFilterChange('All')}
//                     >
//                         All
//                     </Button>
//                     <Button
//                         variant={activeFilter === 'Casual' ? 'primary' : 'light'}
//                         onClick={() => handleFilterChange('Casual')}
//                     >
//                         Casuals
//                     </Button>
//                     <Button
//                         variant={activeFilter === 'School' ? 'primary' : 'light'}
//                         onClick={() => handleFilterChange('School')}
//                     >
//                         School Wears
//                     </Button>
//                 </ButtonGroup>
//             </Container>
//         </Navbar>
//     );
// }

// export default Category