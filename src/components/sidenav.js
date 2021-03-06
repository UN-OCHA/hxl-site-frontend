import React, { Component }  from 'react'

class Sidenav extends Component{
  render() {
    return (
      <nav className='sidebar tertiary-nav' aria-labelledby="tertiary-navigation">
        { this.props.links.map((group, groupID) => {
          return (
            <ul key={groupID}>
              { group.links.map((item, itemID) => {
                if (item.link !== null && item.title !== null) {
                  let link = <a href={item.link.url}>{item.link.title}</a>;
                  if (itemID===0) {
                    link = (item.link.url==='#') ? <h4>{item.link.title}</h4> : <h4><a href={item.link.url}>{item.link.title}</a></h4>
                  }
                  return (
                    <li key={item.link.title}>{link}</li>
                  )
                }
                else {
                  return null;
                }
              })}
            </ul>
          )
        })}
      </nav>
    )
  }
}

export default Sidenav;