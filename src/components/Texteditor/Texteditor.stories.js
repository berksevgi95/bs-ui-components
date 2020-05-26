/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Formik } from 'formik';

import { BSTheme } from '../../utils';
import Texteditor from './Texteditor';
import Button from '../Button/Button';


export default {
  title: 'Texteditor',
};

export const Default = () => (
  <Texteditor />
);

export const SecondaryTheme = () => (
  <Texteditor theme={BSTheme.SECONDARY} />
);

export const AlternativeTheme = () => (
  <Texteditor theme={BSTheme.ALTERNATIVE} />
);

export const WithFormik = () => (
  <Formik
    initialValues={{
      text: JSON.parse(
        '{"blocks":[{"key":"eaek1","text":"Hello","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e71jv","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3rihg","text":"World!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
      ),
    }}
    onSubmit={(e) => console.log(JSON.stringify(e))}
  >
    {(props) => {
      const {
        values,
        handleSubmit,
        setFieldValue,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <Texteditor
            id="text"
            value={values.text}
            onChange={setFieldValue}
          />
          <br />
          <Button type="submit">
            Submit
          </Button>
        </form>
      );
    }}
  </Formik>
);
