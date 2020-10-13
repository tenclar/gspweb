import React, { useEffect, useState } from 'react';
import { FiPlus, FiRefreshCw, FiSearch } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../../services/api';
import ButtonAlterar from '../../../components/admin/ButtonAlterar';
import {
  Container,
  Title,
  Table,
  Panel,
  SearchTableContainer,
  LinkButton,
} from './styles';

interface Categoria {
  id: string;
  slug: string;
  titulo: string;
}

const Categorias: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(false);



    async function loadCategorias() : Promise<void> {
      try {
        setLoading(true);
        const response = await api.get('/categorias');
        setCategorias(response.data);
      } catch (err) {
        toast.error('Erro na lista');
      } finally {
        setLoading(false);
      }
    }


  useEffect(() => {
    loadCategorias();
  }, []);

  return (
    <Container>
      <Title>
        <h1>Categorias</h1>

        <hr />
      </Title>
      <Panel>
        <SearchTableContainer>
          <input name="search" type="text" placeholder="Search" />
          <button type="button">
            <FiSearch size={20} />
          </button>
        </SearchTableContainer>
      </Panel>
      <Panel>
        <Table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th
                style={{
                  width: '35px',
                }}
              >
                <LinkButton to="/admin/cadastro/categorias/novo">
                  <FiPlus />
                </LinkButton>
              </th>
              <th style={{ width: '60px' }}>#</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((cat)=>(


            <tr key={cat.id} >
              <td style={{ textAlign: 'center' }}>
                <ButtonAlterar type="button">
                  <FiRefreshCw />
                </ButtonAlterar>

              </td>
              <td style={{ textAlign: 'center' }}>{cat.id}</td>
              <td>{cat.titulo}</td>
            </tr>
           ))}
          </tbody>
        </Table>
      </Panel>
      <ToastContainer />
    </Container>
  );
};

export default Categorias;
