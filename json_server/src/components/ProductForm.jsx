
import './ProductForm.css'
import { Link } from 'react-router-dom'

export default function ProductForm({ name, price, stock, handleName, handlePrice, handleStock, saveProduct}) {
    return (
        <div className='container'>
        <h2>Cadastro de Produtos</h2>
        <form onSubmit={(e) => saveProduct(e)}>
            <label className='form-label' htmlFor="nome">Nome:</label>
            <input className='form-input' value={name} type="text" name="nome" onChange={(e) => handleName(e)} required/>
            <label className='form-label' htmlFor="preco">Preço:</label>
            <input className='form-input' value={price} type="number" name="preco" onChange={(e) => handlePrice(e)} required/>
            <label className='form-label' htmlFor="estoque">Estoque:</label>
            <input className='form-input' value={stock} type="number" name="estoque" onChange={(e) => handleStock(e)} required/>
            <div className="actions-container">
                <Link to="/product-table" className="button-voltar">Voltar</Link>
                <button type="submit" className="button-cadastrar" onClick={saveProduct}>Cadastrar</button>
            </div>
        </form>
      </div>
    )
}