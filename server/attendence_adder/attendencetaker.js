const { MongoClient } = require('mongodb');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { Notebook, sessionManager, contentsManager } = require('jupyter-js');
const fs = require('fs');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);


const client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });

// Connect to MongoDB
client.connect().then(() => {
  const db = client.db('your-database-name');
  const attendancesCollection = db.collection('attendances');
  const recognitionResultsCollection = db.collection('recognitionResults');

  // Function to insert attendance document
  async function insertAttendanceDocument(studentId, courseId) {
    try {
      const attendanceDocument = {
        studentId,
        courseId,
        status: 'present',
        date: new Date(),
      };

      const result = await attendancesCollection.insertOne(attendanceDocument);

      console.log(`Inserted attendance document with _id: ${result.insertedId}`);
    } catch (error) {
      console.error('Error inserting attendance document:', error);
    }
  }

  io.on('connection', (socket) => {
    console.log('A client connected.');

    socket.on('startRecognition', () => {
      const ipynbScript = fs.readFileSync('https://colab.research.google.com/github/spaceluvr/face-recognition-attendance-system-/blob/main/train.ipynb', 'utf8');
      const notebook = new Notebook();
      notebook.session.kernel.name = 'python3'; 

      notebook.fromJSON(JSON.parse(ipynbScript)); 

      notebook
        .render()
        .then(() => {
          const recognitionResults = notebook.model.cells; 

          recognitionResultsCollection.insertOne({ results: recognitionResults }, (err) => {
            if (err) {
              console.error('Error inserting into MongoDB:', err);
            } else {
              // Send the recognitionResults back to the React app
              socket.emit('recognitionResults', recognitionResults);
            }
          });

          // Clean up resources
        //   notebook.dispose();
        })
        .catch((err) => {
          console.error('Error executing IPython Notebook script:', err);
        });
    });

    socket.on('markAttendance', (studentId, courseId) => {
      // Call the function to insert an attendance document
      insertAttendanceDocument(studentId, courseId);
    });
  });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
