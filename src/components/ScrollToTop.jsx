import { Box,Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function ScrollToTop() {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      {scrollToTop && (
        <Tooltip placement="top">
             <Box component="button" className="ScrollBtn" onClick={scrollTop}
          style={{
            position:"fixed",
            bottom:"30px",
            right:"30px",
            borderRadius: '50%',
            cursor:"pointer",
            width:"50px",
            height:"50px"
          }}
          variant="rounded"
          >
            <KeyboardDoubleArrowUpIcon />
          </Box>
        </Tooltip>
      )}
    </Box>
  );
}