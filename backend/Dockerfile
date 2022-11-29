FROM node:current-alpine
ENV PORT=4000
ENV DATABASE=mongodb://moundir:moundir@mongo:27017
ENV TEST=test
ENV JWT_SECRET=hkdhksqdjhhsqhkhjkhdkjqshdkhqsd
ENV EMAIL=elmondhirjabir@gmail.com
ENV PASSWORDEMAIL=qhgeglbnfxqelacq
ENV HOSTNAME=http://localhost:4000
ENV FRONTENDHOSTNAME=http://localhost:3000
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]