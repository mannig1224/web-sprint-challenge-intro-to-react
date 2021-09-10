// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const ContentStyle = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 80%;
    margin: auto;

`

const Character = ({characters}) => {
    
    return (
        <div>
            {
                characters.map((character, index) => {
                    return (
                        <ContentStyle key={index}>
                            <h2>{character.name}</h2>
                            <button>More Info</button>
                        </ContentStyle>
                    )
                })
            }
            
        </div>
    )
};

export default Character;