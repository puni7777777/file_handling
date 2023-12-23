import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export default function Textinput(props) {

    const [text, setText] = useState("Enter Text Here");
    const [text_count, setText_count] = useState("3");

    function toggleChars(msg) {
        for (let i = 0; i < msg.length; i++) {
            if (msg[i] >= 'A' && msg[i] <= 'Z')
                msg[i] = String.fromCharCode(msg[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
            else if (msg[i] >= 'a' && msg[i] <= 'z')
                msg[i] = String.fromCharCode(msg[i].charCodeAt(0) + 'A'.charCodeAt(0) - 'a'.charCodeAt(0));
        }
    }

    const capsText = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const lowerText = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const sentenceCase = () => {
        let newText = text
            .toLowerCase()
            .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
                return c.toUpperCase();
            });
        setText(newText);
    };

    const capsEachword = () => {
        let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(newText);
    };

    const remove_lineBreaks = () => {
        let newText = text.replace(/[\r\n]/gm, ' ');
        setText(newText);
    };

    const add_lineBreaks = () => {
        let rm_spaces = text.replaceAll('. ', '.');
        let newText = rm_spaces.replaceAll('.', '.\n');
        setText(newText);
    };

    const count_words = () => {
        let newText = 0;
        let check = false;

        for (let i = 0; i < text.length; i++) {
            if (text[i] !== ' ' && !check) {
                newText++;
                check = true;
            } else if (text[i] === ' ') {
                check = false;
            }
        }
        setText_count(newText);
    };

    useEffect(() => {
        count_words();
    }, [text]);

    const toggle = () => {
        let msg = text.split("");
        toggleChars(msg);
        let newText = msg.join("");
        setText(newText);
    };

    const clear = () => {
        let newText = "Enter Text Here";
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-end mb-3">
                <h1>{props.heading}</h1>
                <h6>{text_count} Words</h6>
            </div>
            <div className="mb-3 mr-0">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="text-box"
                    rows="8"
                ></textarea>
            </div>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button className="btn btn-outline-primary overflow-hidden" onClick={remove_lineBreaks}>
                    rm_linebreaks
                </button>
                <button className="btn btn-outline-primary overflow-hidden" onClick={add_lineBreaks}>
                    add_linebreaks
                </button>
                <button className="btn btn-outline-primary overflow-hidden" onClick={capsText}>
                    capitalize
                </button>
                <button className="btn btn-outline-primary overflow-hidden" onClick={lowerText}>
                    lower
                </button>
                <button className="btn btn-outline-primary overflow-hidden" onClick={sentenceCase}>
                    Sentence case
                </button>
                <button className="btn btn-outline-primary overflow-hidden" onClick={capsEachword}>
                    capEachword
                </button>
                <button className="btn btn-outline-primary overflow-hidden" onClick={toggle}>
                    toggle_case
                </button>
                <button className="btn btn-outline-danger overflow-hidden" onClick={clear}>
                    Reset
                </button>
            </div>
        </div>
    );
}


Textinput.propTypes = {
    heading: PropTypes.string,
}

Textinput.defaultProps = {
    heading: "Enter text",
}
