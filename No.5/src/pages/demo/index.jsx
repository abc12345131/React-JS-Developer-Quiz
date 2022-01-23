import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import PropTypes from 'prop-types'
import { Input, Button } from 'antd'
import {
    SearchOutlined,
    StarOutlined
} from '@ant-design/icons'
import './index.css'

import { reqWords } from '../../api'

export default class Demo extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'queue-demo',
    };

    constructor(props) {
        super(props);
        this.openIndex = null;
        this.position = {};
        this.state = {
            words: [],
            animation: [],
            style: [],
            keyword: '',
            loading: false
        };
    }

    componentDidMount() {
        if (window.addEventListener) {
            window.addEventListener('touchend', this.onTouchEnd);
            window.addEventListener('mouseup', this.onTouchEnd);
        } else {
            window.attachEvent('ontouchend', this.onTouchEnd);
            window.attachEvent('onmouseup', this.onTouchEnd);
        }
    }

    componentWillUnmount() {
        if (window.addEventListener) {
            window.removeEventListener('touchend', this.onTouchEnd);
            window.removeEventListener('mouseup', this.onTouchEnd);
        } else {
            window.detachEvent('onresize', this.onTouchEnd);
            window.detachEvent('onmouseup', this.onTouchEnd);
        }
    }

    getWords = async (keyword) => {
        this.setState({loading: true})
        const result = await reqWords(keyword)
        if (result) {        
            console.log(result)    
            this.setState({words: result})
            this.setState({loading: false})
        } else {
            alert('Get words failed!')
        }
    }

    onTouchStart = (e, i) => {
        if (this.openIndex || this.openIndex === 0) {
            const animation = this.state.animation;
            animation[this.openIndex] = { x: 0, ease: 'easeOutBack' };
            this.setState({ animation }, () => {
                delete this.state.style[this.openIndex];
            });
            this.openIndex = null;
            return;
        }
        this.index = i;
        this.mouseXY = {
            startX: e.touches === undefined ? e.clientX : e.touches[0].clientX,
        };
    };

    onTouchEnd = () => {
        if (!this.mouseXY) {
            return;
        }
        const animation = this.state.animation;
            if (this.position[this.index] <= -120) {
                this.openIndex = this.index;
                animation[this.index] = { x: -120, ease: 'easeOutBack' };
            } else {
                animation[this.index] = { x: 0, ease: 'easeOutBack' };
            }

            delete this.mouseXY;
            delete this.position[this.index];
            this.index = null;
            this.setState({ animation });
    };

    onTouchMove = (e) => {
        if (!this.mouseXY) {
            return;
        }
        const currentX = e.touches === undefined ? e.clientX : e.touches[0].clientX;
        let x = currentX - this.mouseXY.startX;
        x = x > 10 ? 10 + (x - 10) * 0.2 : x;
        x = x < -120 ? -120 + (x + 120) * 0.2 : x;
        this.position[this.index] = x;
        const style = this.state.style;
        style[this.index] = { transform: `translateX(${x}px)` };
        const animation = [];
        this.setState({ style, animation });
    };

    onDelete = () => {
        const words = this.state.words;
        const deleteData = words.filter((word, index) => index === this.openIndex)[0];
        const i = words.indexOf(deleteData);
        words.splice(i, 1);
        delete this.state.style[this.openIndex];
        this.openIndex = null;
        this.setState({ words });
    };

    render() {
        const {keyword, words, loading} = this.state

        const liChildren = words.map((wordDetail, index) => {
            const { word, score, numSyllables } = wordDetail
            return (

                <li
                    key={index}
                    onMouseMove={this.onTouchMove}
                    onTouchMove={this.onTouchMove}
                >
                    <div className={`${this.props.className}-delete`}>
                        <a className='delete-button' onClick={(e) => { this.onDelete(e); }}>Delete</a>
                    </div>
                    <TweenOne
                        className={`${this.props.className}-content`}
                        onTouchStart={e => this.onTouchStart(e, index)}
                        onMouseDown={e => this.onTouchStart(e, index)}
                        onTouchEnd={this.onTouchEnd}
                        onMouseUp={this.onTouchEnd}
                        icon={<StarOutlined />}
                        animation={this.state.animation[index]}
                        style={this.state.style[index]}
                    >
                        <span className={`${this.props.className}-data`}>{word}</span>
                        <span className={`${this.props.className}-data`}>{score}</span>
                        <span className={`${this.props.className}-data`}>{numSyllables}</span>

                    </TweenOne>
                </li>);
        });
        return (

            <div>
                <div className={`${this.props.className}-wrapper`}>
                    <div className={this.props.className}>
                        <div className={`${this.props.className}-header`}>
                            <div>Rhyme Words</div>
                        </div>
                        <div>
                            <Input
                                type="text"
                                className="input"
                                size="large"
                                prefix={<SearchOutlined />}
                                placeholder="Please enter the keyword"
                                autoComplete="off"
                                value={keyword}
                                onChange={event => this.setState({keyword: event.target.value})}
                            />
                            <Button
                                className="search"
                                type='primary'
                                size="large"
                                loading={loading}
                                onClick={()=>this.getWords(keyword)}
                            >
                                Find out rhyme words!
                            </Button>
                        </div>
                        <div>
                            <span className="column-name">Word</span>
                            <span className="column-name">Score</span>
                            <span className="column-name">Number of Syllables</span>
                        </div>
                        <QueueAnim
                            component="ul"
                            animConfig={[
                                { opacity: [1, 0], translateY: [0, 30] },
                                { height: 0 },
                            ]}
                            ease={['easeOutQuart', 'easeInOutQuart']}
                            duration={[550, 450]}
                            interval={150}
                        >
                            {liChildren}
                        </QueueAnim>
                    </div>
                </div>
            </div>);
    }
}