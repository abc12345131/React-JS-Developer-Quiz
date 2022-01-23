import React, { Component } from 'react'
import { reqWords } from '../../api'
import './index.less'

export default class Home extends Component {

    state = {
        words: [],
        keyword: ''
    }

    getWords = async (keyword) => {
        const result = await reqWords(keyword)
        if (result) {        
            console.log(result)    
            this.setState({words: result})
        } else {
            alert('Get words failed!')
        }
    }

    render() {
        const {keyword, words} = this.state
        return (
            <div>
                <input  
                    name="keyword"
                    type="text"
                    id="input"
                    placeholder="Please enter the keyword"
                    autoComplete="off"
                    value={keyword}
                    onChange={event => this.setState({keyword: event.target.value})}
                />
                <button id="enter" onClick={() =>this.getWords(keyword)}>
                    Enter
                </button>
                {
                    words ?
                        words.map( wordDetail => {
                            return (
                                <div key={wordDetail.word}>word: {wordDetail.word}, score: {wordDetail.score}, numSyllables: {wordDetail.numSyllables}</div>
                            ) 
                        }) : null
                }
            </div>
        )
    }
}