import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
// import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test("testando os 2 comentarios e a quantidade adicionada no final", () => {
        render(<Post />);

        fireEvent.change(screen.getByTestId("comentario"), {
            target: {
                value: "muito bonito",
            },
        });
        fireEvent.click(screen.getByTestId("btn-enviar"));
        expect(screen.getByText("muito bonito")).toBeInTheDocument();

        fireEvent.change(screen.getByTestId("comentario"), {
            target: {
                value: "legal",
            },
        });
        fireEvent.click(screen.getByTestId("btn-enviar"));
        expect(screen.getByText("legal")).toBeInTheDocument();

        expect(screen.getAllByTestId("lista")).toHaveLength(2);
    });
})