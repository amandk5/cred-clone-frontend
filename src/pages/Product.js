import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Avatar, Box, Button, Pagination } from "@mui/material";
import Header from "../components/Header";
import { useInView } from "react-intersection-observer";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./product.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  //   { field: "s_no", headerName: "S.No", width: 70 },
  {
    field: "product_img",
    headerName: "Product",
    width: 100,
    renderCell: (params) => {
      // console.log(params.value);
      return (
        <>
          <Avatar src={params.value} />
        </>
      );
    },
  },
  //   { field: "id", headerName: "ID", width: 70 },

  { field: "name", headerName: "Name", width: 100 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "company_detail", headerName: "Company Detail", width: 200 },
  { field: "category", headerName: "Category", width: 130 },
  { field: "price", headerName: "Price", type: "number", width: 90 },
];

const ProductList = () => {
  // loader
  const [loading, setLoading] = useState(false);

  const { ref: myRef, inView: elementVisible } = useInView();

  const [page, setPage] = useState(1);
  const [p, setP] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // this contains only selected fields of product
  const [products, setProducts] = useState([]);
  // this contains all data of a product
  const [productsAllData, setProductsAllData] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState();

  const fetchData = async () => {
    const url = `https://catalog-management-system-kxyaws5ixa-uc.a.run.app/cms/products?page=${page}`;

    const response = await axios.get(url).then((res) => res.data);
    const total_Pages = response.totalPages;
    const data = response.products;
    // from the data extract - name description,image,price(mrp), main_category,company detail
    let extractedData = data.map((el, index) => {
      let obj = {
        id: index + 1 + Number(p),
        product_img: el.images.front,
        name: el.name,
        description: el.description,
        company_detail: el.company_detail.name,
        category: el.main_category,
        price: el.mrp.mrp,
      };
      el = obj;
      return el;
    });
    // store products all data into productsAllData
    setProductsAllData(data);
    // store products data from selected fields to display
    setProducts(extractedData);
    if (totalPages === 0) {
      setTotalPages(total_Pages);
    }
    // setProducts(data.products);
    // console.log(data);
  };

  useEffect(() => {
    if (totalPages === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [totalPages]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageChange = (params) => {
    // console.log(params.target.innerText);
    // setPage(params.page);
    setPage(params.target.innerText);
    // setP(Number(p) + 20);
    setP((Number(params.target.innerText) - 1) * 20);
  };

  // for product modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Header changePos={elementVisible} />

      {/* modal for product details  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {/* send the productsAllData as props and the selected row index  */}
          <ProductBox
            productsAllData={productsAllData}
            index={selectedProductIndex}
            handleClose={handleClose}
          />
        </Box>
      </Modal>

      {/* products  list  */}

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Box
          sx={{
            margin: "auto",
            padding: "0px 10px",
            height: "100vh",
            width: "100vw",
            backgroundColor: "white",
          }}
        >
          <DataGrid
            rows={products}
            columns={columns}
            // onRowClick={() => alert("row clicked")}
            onRowClick={(params) => {
              // set the index
              setSelectedProductIndex(params.id - 1);
              // open product modal
              handleOpen();
            }}
            // pagination
            // pageSize={PAGE_SIZE}
            // rowCount={totalPages * PAGE_SIZE}
            // onPageChange={handlePageChange}
            hideFooter
          />
          <Box
            sx={{
              background: "white",
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Pagination
              count={Number(totalPages)}
              // showFirstButton
              // showLastButton
              ref={myRef}
              color="primary"
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductList;

export const ProductBox = ({ productsAllData, index, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    color: "black",
    border: "1px solid gray",
    borderRadius: "0.5rem",
    boxShadow: 24,
    padding: "10px 5px",
  };

  const [product, setProduct] = useState(productsAllData[index]);
  console.log(product.company_detail.name);
  useEffect(() => {
    // setProduct(productsAllData[index - 1]);
    console.log(productsAllData[index]);
    return () => setProduct({});
  }, [index]);

  return (
    <Box sx={style}>
      <Box sx={{ textAlign: "right" }}>
        <Button
          sx={{ fontSize: "30px", color: "red" }}
          onClick={() => handleClose()}
        >
          &times;
        </Button>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap="wrap"
        p="10px"
      >
        <Box display={"flex"} flexDirection={"column"} gap="5px" w="50%">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>name: </b>
            {product.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>company: </b> {product.company_detail.name}
          </Typography>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>main category:</b>
            {product.main_category}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>min order:</b>
            {product.minimum_order_quantity}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>price:</b>
            {product.mrp.mrp}
          </Typography>
        </Box>
        <Box
          w="50%"
          component="img"
          src={product.images.front}
          maxWidth="200px"
          maxHeight="200px"
          alt={product.name}
        />
      </Box>
      <Typography id="modal-modal-description" sx={{ mt: 2, p: "10px" }}>
        <b>description: </b>
        {product.description}
      </Typography>
    </Box>
  );
};
