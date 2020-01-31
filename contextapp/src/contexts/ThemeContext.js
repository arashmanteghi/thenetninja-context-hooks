import React, { Component, createContext } from 'react';

export const ThemeContext = createContext({});

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }

  toggleTheme= () => {
    this.setState({ isLightTheme: !this.state.isLightTheme, toggleTheme: this.toggleTheme });
  }

  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;