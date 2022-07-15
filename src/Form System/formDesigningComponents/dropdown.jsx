import React from 'react'

class Dropdown extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               isListOpen: false,
               headerTitle: this.props.title
          }
     }

     toggleList = () => {
          this.setState(prevState => ({
               //Toggle's the lists openness state
               isListOpen: !prevState.isListOpen
         }))
     }

     selectItem = (item) => {
          const { resetThenSet } = this.props;
          const { title, id, key } = item;
          this.setState({
               headerTitle: title,
               isListOpen: false,
          //Call the parent function passing the id and key
          }, () => resetThenSet(id, key));
     }
     
     render() {
          const { isListOpen, headerTitle } = this.state;
          const { list } = this.props;
        
          return (
          <div className="dd-wrapper">
               <button
                    type="button"
                    className="dd-header"
                    onClick={this.toggleList}>
               <div className="dd-header-title">{headerTitle}</div>
               </button>
               {/*Renders following code only if isListOpen is True*/}
               {isListOpen && (
                    <div
                    role="list"
                    className="dd-list">
                    {/*maps the elements of dropdown options and displays them*/}
                    {list.map((item) => (
                         <button
                         type="button"
                         className="dd-list-item"
                         key={item.id}
                         onClick={() => this.selectItem(item)}>
                         {item.title}
                         {' '}
                         {item.selected}
                         </button>
                    ))}
                    </div>
               )}
               </div>
          )
     }
}

export default Dropdown