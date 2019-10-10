
import React from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import './FormContainer.css'


const FormContainer = ({ handleLogIn, handleSignUp, handleChange, newUser }) => {
  return (
    <>
      <div className='visible-group'>
        <form onSubmit={handleSignUp}>
          {
            Object.entries(newUser).map(([dataName, data], index) => 
              <TextInput
                key={index}
                name={dataName}
                value={data.value}
                placeholder={data.prettyName}
                type={data.type}
                handleChange={e => handleChange(e.target.value, dataName)}
              />
            )    
          }
            <Button
                title={'Log In'}
                action={handleLogIn}
            />
        </form>

        <Button
                title={'Sign Up'}
                action={handleSignUp}
            />
      </div>
    </>
  );
}

export default FormContainer;
