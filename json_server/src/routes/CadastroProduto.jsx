
import ProductTable from "../components/ProductTable"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function CadastroProduto (){

      const [products, setProducts] = useState([]);
      const url = 'http://localhost:3000/products';
      const navigate = useNavigate();
  
      useEffect(() => {
          // Lista todos os produtos
          const getProductsList = async () => {
              const res = await fetch(url);
              const data = await res.json();
              setProducts(data);
          }
  
          getProductsList();
      }, []);
  
      const deleteProduct = async (id) => {
          // Faz a requisição HTTP
          const res = await fetch(url + `/${id}`, {
              method: "DELETE",
              headers: {
                  "content-type": "application/json"
              },
          });
  
          const deletedProduct = await res.json();
          // Atualização da tabela
          setProducts(products.filter(prod => prod.id !== deletedProduct.id));
      }
  
      const editProduct = (id) => {
          // Navega para a página de cadastro com o produto a ser editado
          const productToEdit = products.find(prod => prod.id === id);
          navigate('/edit-product', { state: { product: productToEdit } });
      }
  
      return (
          <div>
              {products.length > 0 ? (
                  <ProductTable products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
  
              ) : (
                  <h3 style={{ marginBottom: '30px' }}>Nenhum produto cadastrado...</h3>
              )}
          </div>
      );
  }