## Notice
Due to  custom parameter , we need to use traditional loading javascript (public/index.html) as follow: 

```html
   <script
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCz5mP_fkHn_A2_o7DkODD607AFqu_H0Ls&libraries=geometry"></script>

 
```

## Using Parameters

Creating file named ".env" ,and the content is below :

```properties
process.env.REACT_APP_GOOGLE_KEY=AIzaSyCz5mP_fkHn_A2_o7DkODD607AFqu_H0Ls
```