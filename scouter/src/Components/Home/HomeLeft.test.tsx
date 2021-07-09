import React from 'react'
import { render, cleanup } from '@testing-library/react';
import HomeLeft from './HomeLeft'

afterEach(cleanup);

it('should display correct text', ()=>{
    const {getByTestId}= render(<HomeLeft/>);
    expect(getByTestId('hlh6').textContent).toBe('Top 5 Anime')
})

