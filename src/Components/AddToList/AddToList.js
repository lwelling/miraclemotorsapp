import React, { Component } from "react";
import firebase from "../../firebase";
import Input from '../Input/Input';
import Button from '../Button/Button';

class AddToList extends Component {
  state = {
    newUnit: {
      vin: {
        prettyName: 'VIN',
        value: '',
        type: 'string',
      },
      year: {
        prettyName: 'Year',
        value: '',
        type: 'number',
      },
      make: {
        prettyName: 'Make',
        value: '',
        type: 'string',
      },
      model: {
        prettyName: 'Model',
        value: '',
        type: 'string',
      },
    }
  }

  handleSave = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection('inventory').doc(this.state.newUnit.vin.value).set({
      year: this.state.newUnit.year.value,
      make: this.state.newUnit.make.value,
      model: this.state.newUnit.model.value
    })
    .then(function() {
      alert("Successfully Added!")
    })
    .catch(function(error) {
      console.error("Error adding document: ", error)
    })
  }

  handleChange = (value, key) => {
    this.setState(prevState => ({
      newUnit: {
        ...prevState.newUnit,
        [key]: {
          ...prevState.newUnit[key],
          value,
        }
      }
    }))
  }

  render() {
    return (
      <div>
        <h1>Add To Database</h1>
          <form className='container' onSubmit={this.handleSave}>
            {
              Object.entries(this.state.newUnit).map(([attribute, data], index) =>
                <Input type={attribute.type}
                  key={index}
                  name={attribute}
                  value={data.value}
                  placeholder={data.prettyName}
                  handleChange={e => this.handleChange(e.target.value, attribute)}
                />
              )  
            }
            <Button
              title={'Add'}
              action={this.handleSave}
            />
          </form>
      </div>
    )
  }
}

export default AddToList;
