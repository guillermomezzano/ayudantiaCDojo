// componentes funcionales
import React from "react";

const Layout = ({ children, title, footer }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
      <h1>{footer}</h1>
    </div>
  );
};

export default Layout;

// class components

// import React, { Component } from "react";

// class Layout extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         {this.props.children}
//         <h1>{this.props.footer}</h1>
//       </div>
//     );
//   }
// }

// export default Layout;
