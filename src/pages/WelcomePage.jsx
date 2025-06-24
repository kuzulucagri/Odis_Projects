import React from "react";
import { Box, Typography, Button, Stack, Link } from "@mui/material";
import odisLogo from '../images/odis_logo.png';
import { useNavigate } from "react-router-dom";




const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "546px",
        overflow: "hidden", // scroll engelle
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundImage: `url("/welcome_page_background1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100vh", // Yüksekliği sabitle, genişlik oranlı ayarlansın
        backgroundPosition: "left center", // Sol orta hizala
        backgroundColor: "#f5f5f5",
        px: 2,
        pt: "20vh",
        pb: "20vh"
      }}
    >


      {/* ÜST LOGO VE BAŞLIK */}
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 4,
          ml: "60%", // %20 sağa kaydır
        }}
      >
        {/* Logo ve Başlık */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            component="img"
            src={odisLogo}
            alt="ODIS Logo"
            sx={{ width: "400px", mb: 3 }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#333",
            }}
          >
            ODİS EĞİTİM ETKİLİ ÖĞRENME MERKEZİ
          </Typography>
        </Box>

        {/* Butonlar */}
        <Stack
          spacing={2} // Dikey boşluk (örneğin 16px)
          sx={{
            width: "100%",      // Kendi kapsayıcısına uy
            maxWidth: 300,      // Maksimum genişlik sabit
            mt: 4,              // Üstten boşluk
            alignItems: "stretch" // Butonların genişliği eşit olsun
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/teacher")}
          >
            Öğretmen Giriş
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/parent")}
          >
            Veli Giriş
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate("/student")}
          >
            Öğrenci Giriş
          </Button>
        </Stack>


        {/* Footer */}
        <Box
          sx={{
            textAlign: "center",
            mt: "150px", // 200px aşağı kaydırır
            pb: 2,
            pt: 4,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#555", fontWeight: 500 }}
          >
            © 2025. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "16px",
              mt: 1,
              fontSize: "16px",
              color: "#1976d2",
            }}
          >
            <Link href="#" underline="hover" color="inherit">Privacy Policy</Link>
            <Link href="#" underline="hover" color="inherit">Cookie Notice</Link>
            <Link href="#" underline="hover" color="inherit">Terms</Link>
            <Link href="#" underline="hover" color="inherit">Cookie Settings</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


export default WelcomePage;
