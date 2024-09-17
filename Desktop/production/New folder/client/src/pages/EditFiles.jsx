import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Sidemenu from '../components/Sidemenu';
import { styled } from '@mui/material/styles';
import { MenuItem, Select, FormControl, InputLabel, Card, CardContent, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image'; // MUI Icon for image placeholder

// Create a styled Box for the BottomBar with height 50px, white background, and box shadow
const BottomBar = styled(Box)({
  height: '50px',
//   width: 'calc(100% - 200px)', // Adjust width as needed
  backgroundColor: '#FFFFFF', // White background color
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Subtle box-shadow for a modern look
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'relative',
//   left: '220px', // Adjust based on your Sidemenu width
});

export default function EditFiles({ collections }) {
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const handleCollectionChange = (event) => {
    setSelectedCollection(event.target.value);
    setSelectedFile(''); // Reset selected file when collection changes
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.value);
  };

  // Find the selected collection and file details
  const selectedCollectionObj = collections.find((collection) => collection.id === selectedCollection);
  const selectedFileObj = selectedCollectionObj?.files.find((file) => file.id === selectedFile);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', pt: 8.1, pl: 2 }}>
        {/* Bottom Bar with two dropdowns */}
        <BottomBar>
          {/* Collection Dropdown */}
          <FormControl>
            <InputLabel id="select-collection-label">Select Collection</InputLabel>
            <Select
              labelId="select-collection-label"
              value={selectedCollection}
              onChange={handleCollectionChange}
              sx={{ width: 200 }}
            >
              {collections.map((collection) => (
                <MenuItem key={collection.id} value={collection.id}>
                  {collection.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* File Dropdown - Activated only after Collection is selected */}
          <FormControl>
            <InputLabel id="select-file-label" disabled={!selectedCollection}>
              Select File
            </InputLabel>
            <Select
              labelId="select-file-label"
              value={selectedFile}
              onChange={handleFileChange}
              sx={{ width: 200 }}
              disabled={!selectedCollection} // Disable dropdown if no collection is selected
            >
              {selectedCollection &&
                collections
                  .find((collection) => collection.id === selectedCollection)
                  .files.map((file) => (
                    <MenuItem key={file.id} value={file.id}>
                      {file.fileName}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>
        </BottomBar>

        {/* Main content area below BottomBar */}
        <Box sx={{ display: 'flex', pt: '20px', flexGrow: 1, position: 'relative' }}>
          {/* Hide Sidemenu if a file is selected */}
          {!selectedFile && <Sidemenu />}

          {/* Independent Box for the Card on the left side */}
          {selectedFile && selectedFileObj && (
            <Box
              sx={{
                position: 'absolute', // Positioned independently from the BottomBar
                top: '15px', // Move it up by adjusting this value
                left: '0px', // Align to the left where Sidemenu used to be
                width: '500px', // Fit the Sidemenu width
                padding: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Card
                sx={{
                  width: '100%', // Make sure the card fills the box width
                  transition: '0.3s ease', // Smooth transition effect
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    File Details
                  </Typography>

                  {/* Map over sections and display the information */}
                  {selectedFileObj.sections.map((section, index) => (
                    <div key={index}>
                      <Typography variant="subtitle1">{section.section_name}</Typography>
                      {section.data.map((item, idx) => (
                        <Typography key={idx}>
                          <strong>{item.label}:</strong> {item.value}
                        </Typography>
                      ))}
                      <hr />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Box>
          )}

          {/* Independent Box for the Image/Icon on the right side */}
          {selectedFile && (
            <Box
              sx={{
                position: 'absolute', // Positioned independently
                top: '15px', // Move it up to align with the left box
                right: '120px', // Align it to the right side
                width: '600px', // Set width for the right box
                padding: '10px',
                display: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                height: '400px', // Set height for box
                backgroundColor: '#f5f5f5', // Light background to separate from main content
              }}
            >
              {/* Placeholder for the image or icon */}
              <ImageIcon sx={{ fontSize: '400px', color: '#888' }} />
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
