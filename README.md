* [ ] `mkdir server client`
* [ ] `cd client && npm init -y && npm install --save-dev parcel && npm install --save react react-dom react-router-dom`
* [ ] `npm pkg set scripts.dev="parcel watch index.html"`Add commentMore actions
* [ ] Create `index.html` and `index.tsx`
* [ ] Create `<Application />` with layout
* [ ] Create `<FrontPage />`, `<Question />` og `<Answer />` components
* [ ] Add react router: `<HashRouter />`, `<Routes />`, `<Route />` and `<Link />`
* [ ] Add `useState` with question in `<Application />` and let `handleClickAnswer` call `isCorrectAnswer`
* [ ] Add tests:
    * [ ] `npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer`
    * [ ] Add `babel.config.js`
    * [ ] `npm pkg set scripts.test=jest`
* [ ] Write tests
    * [ ] Snapshot test that question is displayed
    * [ ] Check for onClick