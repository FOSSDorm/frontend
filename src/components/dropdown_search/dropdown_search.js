import React from "react";
import { Dropdown } from "semantic-ui-react";
import {FaJava,FaPython} from 'react-icons/fa';
import {SiJavascript,SiRust} from 'react-icons/si';
import {GrGolang} from 'react-icons/gr';
import PropTypes from 'prop-types';

const languageOptions = [
  {
    key: "Java",
    text: "Java",
    value: "Java",
    image: <FaJava/>,
  },
  {
    key: "Python",
    text: "Python",
    value: "Python",
    image: <FaPython/>,
  },
  {
    key: "Javascript",
    text: "Javascript",
    value: "Javascript",
    image: <SiJavascript/>,
  },
  {
    key: "Rust",
    text: "Rust",
    value: "Rust",
    image: <SiRust/>,
  },
  {
    key: "Golang",
    text: "Golang",
    value: "Golang",
    image: <GrGolang/>,
  },
];

const levelOptions = [
    {
      key: "Low",
      text: "Low",
      value: "Low",
    },
    {
      key: "Medium",
      text: "Medium",
      value: "Medium",
    },
    {
      key: "High",
      text: "High",
      value: "High",
    },
  ];

const DropdownSearch = (props) => (
  <Dropdown
    placeholder={props.option==="language"?"Select language":"Select level"}
    inline
    multiple
    search
    selection
    options={props.option==="language"?languageOptions:levelOptions}
  />
);

DropdownSearch.propTypes = {
    option: PropTypes.string
};

export default DropdownSearch;
