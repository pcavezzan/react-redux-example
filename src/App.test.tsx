import React from 'react';
import {fireEvent, screen} from '@testing-library/react';
import App from './App';
import {renderWithProviders} from "./redux/utils/test-utils";
import {setupServer} from "msw/node";
import {rest} from "msw";

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
    rest.get('https://pokeapi.co/api/v2/pokemon/ditto', (req, res, ctx) => {
        return res(ctx.json(require('./test/pokeapi/ditto.json')), ctx.delay(150))
    })
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())


test('renders App', () => {
    renderWithProviders(<App/>);

    const submitBtnElement = screen.getByText('Submit');

    expect(submitBtnElement).toBeInTheDocument();
});


test('fetches & receives a pokemon after clicking the submit button', async () => {
    renderWithProviders(<App />);
    const input = screen.getByPlaceholderText('Enter the pokemon name');
    fireEvent.change(input, { target: { value: 'ditto' } });

    // after clicking the 'Fetch user' button, it should now show that it is fetching the user
    fireEvent.click(screen.getByText('Submit'));

    // after some time, the user should be received
    expect(await screen.findByText(/limber/i)).toBeInTheDocument();
    expect(await screen.findByText(/imposter/i)).toBeInTheDocument();
    expect(await screen.findByAltText(/logo/i)).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png');
});
