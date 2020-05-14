import { useState } from 'react';

export const useForm = (initialForm) => {

  const [
    form, // model data, state data
    setForm, // function which updates the model/state data, and triggers the re-render
  ] = useState({ ...initialForm });

  const change = (e) => {

    setForm({
      ...form,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
    });
  };

  return [ form, change, () => setForm({ ...initialForm }) ];
};