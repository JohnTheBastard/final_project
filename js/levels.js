var levelDataEasy = [ { dimension: 10,
		    floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 01, 02 ],
			     [ 02, 02 ], [ 03, 02 ], [ 01, 03 ], [ 02, 03 ],
			     [ 03, 03 ], [ 07, 03 ], [ 03, 04 ], [ 07, 04 ],
			     [ 03, 05 ], [ 04, 05 ], [ 05, 05 ], [ 06, 05 ],
			     [ 07, 05 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ],
			     [ 06, 06 ], [ 07, 06 ], [ 02, 07 ], [ 03, 07 ],
			     [ 04, 07 ] ],
		    start: [ 01, 01 ],
		    crate: [ [ 02, 02 ], [ 03, 02 ], [ 02, 03 ] ],
		    dots:  [ [ 07, 03 ], [ 07, 04 ], [ 07, 05 ] ]
		  },
			{ dimension: 10,
				floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ],
			  	 [ 06, 01 ], [ 07, 01 ], [ 08, 01 ], [ 01, 02 ], [ 02, 02 ],
					 [ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 07, 02 ], [ 08, 02 ],
				 	 [ 01, 03 ], [ 02, 03 ], [ 04, 03 ], [ 07, 03 ], [ 01, 04 ],
				   [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 06, 04 ],
				   [ 07, 04 ], [ 05, 05 ], [ 07, 05 ], [ 03, 06 ], [ 04, 06 ],
				   [ 05, 06 ], [ 06, 06 ], [ 07, 06 ], [ 03, 07 ], [ 04, 07 ],
				   [ 05, 07 ], [ 06, 07 ], [ 07, 07 ], ],
				start: [ 06, 06 ],
			  crate: [ [ 03, 02 ], [ 04, 03 ], [ 02, 04 ], [ 04, 06 ] ],
			  dots: [ [ 01, 01 ], [ 02, 01 ], [ 01, 02 ], [ 02, 02 ], ]
			} ,
      { dimension: 10,
        floor: [ [ 02, 01 ], [ 03, 01 ], [ 01, 02 ], [ 02, 02 ],
           [ 03, 02 ], [ 02, 03 ], [ 03, 03 ], [ 02, 04 ], [ 03, 04 ],
           [ 04, 04 ], [ 01, 05 ], [ 02, 05 ], [ 03, 05 ], [ 04, 05 ],
           [ 01, 06 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ] ],
        start: [ 01, 02 ],
        crate: [ [ 02, 02 ], [ 02, 03 ], [ 03, 04 ], [ 02, 05 ], [ 03, 06 ] ],
        dots: [ [ 01, 05 ], [ 01, 06 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ] ]
      } ,
      { dimension: 10,
        floor: [ [ 02, 01 ], [ 03, 01 ], [ 02, 02 ], [ 03, 02 ], [ 04, 02 ],
           [ 05, 02 ], [ 02, 01 ], [ 03, 03 ], [ 05, 03 ], [ 01, 04 ],
           [ 03, 04 ], [ 05, 04 ], [ 06, 04 ], [ 01, 05 ], [ 02, 05 ],
           [ 03, 05 ], [ 04, 05 ], [ 06, 05 ], [ 01, 06 ], [ 02, 06 ],
           [ 03, 06 ], [ 04, 06 ], [ 05, 06 ], [ 06, 06 ], ],
        start: [ 02, 01 ],
        crate: [ [ 03, 02 ], [ 02, 05 ], [ 05, 06 ] ],
        dots: [ [ 01, 04 ], [ 01, 05 ], [ 01, 06 ] ]
      } ,
      { dimension: 10,
        floor: [ [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 06, 02 ],
           [ 02, 03 ], [ 06, 03 ], [ 07, 03 ], [ 08, 03 ], [ 01, 04 ],
           [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 06, 04 ],
           [ 07, 04 ], [ 08, 04 ], [ 01, 05 ], [ 02, 05 ], [ 03, 05 ],
           [ 05, 05 ], [ 06, 05 ], [ 07, 05 ], [ 02, 06 ], [ 03, 06 ],
           [ 05, 06 ], [ 06, 06 ], [ 07, 06 ] ],
        start: [ 02, 04 ],
        crate: [ [ 02, 03 ], [ 04, 04 ], [ 06, 05 ], [ 07, 05 ] ],
        dots: [ [ 02, 05 ], [ 03, 05 ], [ 02, 06 ], [ 03, 06 ] ]
      } ,
      { dimension: 11,
        floor: [ [ 08, 01 ], [ 09, 01 ], [ 08, 02 ], [ 09, 02 ], [ 04, 03 ],
           [ 05, 03 ], [ 06, 03 ], [ 07, 03 ], [ 08, 03 ], [ 09, 03 ],
           [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 08, 04 ],
           [ 01, 05 ], [ 03, 05 ], [ 05, 05 ], [ 06, 05 ], [ 07, 05 ],
           [ 08, 05 ], [ 01, 06 ], [ 03, 06 ], [ 04, 06 ], [ 05, 06 ],
           [ 06, 06 ], [ 08, 06 ], [ 09, 06 ], [ 01, 07 ], [ 03, 07 ],
           [ 04, 07 ], [ 05, 07 ], [ 06, 07 ], [ 07, 07 ], [ 09, 07 ],
           [ 01, 08 ], [ 02, 08 ], [ 04, 08 ], [ 05, 08 ], [ 06, 08 ],
           [ 07, 08 ], [ 09, 08 ], [ 02, 09 ], [ 03, 09 ], [ 04, 09 ],
           [ 05, 09 ], [ 07, 09 ], [ 09, 09 ], [ 01, 09 ], [ 02, 10 ],
           [ 06, 10 ], [ 07, 10 ], [ 08, 10 ], [ 09, 10 ], [ 02, 11 ],
           [ 03, 11 ], [ 04, 11 ], [ 05, 11 ], [ 06, 11 ] ],
         start: [ 08, 01 ],
         crate: [ [ 04, 06 ], [ 06, 06 ], [ 05, 07 ], [ 04, 08 ], [ 06, 08 ] ],
         dots: [ [ 04, 04 ], [ 02, 08 ], [ 08, 06 ], [ 05, 07 ], [ 06, 10] ]
       } ,
      { dimension: 10,
        floor: [ [ 04, 01 ], [ 05, 01], [ 07, 01 ], [ 08, 01 ], [ 03, 02 ],
           [ 04, 02 ], [ 05, 02 ], [ 07, 02 ], [ 08, 02 ], [ 03, 03 ],
           [ 04, 03 ], [ 05, 03 ], [ 06, 03 ], [ 07, 03 ], [ 08, 03 ],
           [ 03, 04 ], [ 04, 04 ], [ 07, 04 ], [ 08, 04 ], [ 03, 05 ],
           [ 04, 05 ], [ 05, 05 ], [ 07, 05 ], [ 01, 06 ], [ 02, 06 ],
           [ 03, 06 ], [ 04, 06 ], [ 05, 06 ], [ 06, 06 ], [ 07, 06 ] ],
        start: [ 08, 01 ],
        crate: [ [ 03, 03 ], [ 05, 03 ], [ 07, 03 ], [ 04, 04 ], [ 04, 05 ] ],
        dots: [ [ 01, 06 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ], [ 05, 06 ] ]
      } ,
      { dimension: 10,
        floor: [ [ 04, 01 ], [ 05, 01 ], [ 06, 01 ], [ 07, 01 ], [ 02, 02 ],
           [ 03, 02 ], [ 04, 02 ], [ 07, 02 ], [ 01, 03 ], [ 02, 03 ],
           [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ], [ 07, 03 ],
           [ 08, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ],
           [ 05, 04 ], [ 06, 04 ], [ 07, 04 ], [ 05, 05 ], [ 06, 05 ],
           [ 07, 05 ] ],
        start: [ 08, 03 ],
        crate: [ [ 04, 02 ], [ 03, 03 ], [ 05, 03 ], [ 04, 04 ], [ 06, 04 ] ],
        dots: [ [ 02, 02 ], [ 01, 03 ], [ 02, 03 ], [ 01, 04 ], [ 02, 04 ] ]
      } ,
      { dimension: 10,
        floor: [ [ 02, 01 ], [ 03, 01 ], [ 06, 01 ], [ 07, 01 ], [ 08, 01 ],
           [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 06, 02 ],
           [ 07, 02 ], [ 08, 02 ], [ 02, 03 ], [ 03, 03 ], [ 07, 03 ],
           [ 08, 03 ], [ 02, 04 ], [ 04, 04 ], [ 05, 04 ], [ 06, 04 ],
           [ 08, 04 ], [ 02, 05 ], [ 04, 05 ], [ 05, 05 ], [ 06, 05 ],
           [ 08, 05 ], [ 01, 06 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ],
           [ 05, 06 ], [ 06, 06 ], [ 07, 06 ], [ 08, 06 ], [ 09, 06 ],
           [ 01, 07 ], [ 02, 07 ], [ 03, 07 ], [ 04, 07 ], [ 05, 07 ],
           [ 07, 07 ], [ 08, 07 ], [ 09, 07 ] ],
        start: [ 08, 07 ],
        crate: [ [ 05, 02 ], [ 02, 03 ], [ 08, 03 ], [ 02, 06 ], [ 05, 06 ],
           [ 08, 06 ] ],
         dots: [ [ 04, 04 ], [ 05, 04 ], [ 06, 04 ], [ 04, 05 ], [ 05, 05 ],
           [ 06, 05 ] ]
        } ,
      { dimension: 10,
        floor: [ [ 03, 01 ], [ 04, 01 ], [ 05, 01 ], [ 06, 01 ], [ 03, 02 ],
           [ 04, 02 ], [ 05, 02 ], [ 06, 02 ], [ 01, 03 ], [ 02, 01 ],
           [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ], [ 01, 04 ],
           [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 04, 05 ],
           [ 05, 05 ] ],
        start: [ 01, 03 ],
        crate: [ [ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 03, 03 ], [ 02, 04 ] ],
        dots:  [ [ 04, 03 ], [ 05, 03 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ] ]
      } ,
      { dimension: 10,
        floor: [ [ 01, 01 ], [ 02, 01 ], [ 07, 01 ], [ 08, 01 ], [ 09, 01 ],
           [ 00, 02 ], [ 01, 02 ], [ 02, 02 ], [ 07, 02 ], [ 08, 02 ],
           [ 09, 02 ], [ 00, 03 ], [ 01, 03 ], [ 02, 03 ], [ 03, 03 ],
           [ 04, 03 ], [ 05, 03 ], [ 06, 03 ], [ 07, 03 ], [ 08, 03 ],
           [ 09, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ],
           [ 06, 04 ], [ 07, 04 ], [ 08, 04 ] ],
        start: [ 07, 04 ],
        crate: [ [ 01, 02 ], [ 02, 03 ], [ 07, 02 ], [ 08, 03 ] ],
        dots: [ [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ] ]
      }  ]

 var levelDataHard [ { dimension: 10,
         floor: [ [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ], [ 06, 01 ],
			      [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 03, 03 ], [ 04, 03 ],
					  [ 05, 03 ], [ 06, 03 ], [ 07, 03 ], [ 01, 04 ], [ 02, 04 ],
					  [ 03, 04 ], [ 05, 04 ], [ 07, 04 ], [ 01, 05 ], [ 02, 05 ],
					  [ 03, 05 ], [ 05, 05 ], [ 06, 05 ], [ 07, 05 ], [ 01, 06 ],
					  [ 02, 06 ], [ 03, 06 ] ],
				 start: [ 03, 01 ],
			   crate: [ [ 03, 03 ], [ 02, 05 ], [ 05, 04 ] ],
			   dots: [ [ 04, 01 ], [ 05, 01 ], [ 06, 01 ] ]
			 } ,
		   { dimension: 10,
			 	 floor: [ [ 03, 01 ], [ 04, 01 ], [ 03, 02 ], [ 04, 02 ], [ 01, 03 ],
			      [ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ],
					  [ 07, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ],
					  [ 05, 04 ], [ 06, 04 ], [ 07, 04 ], [ 03, 05 ], [ 04, 05 ],
					  [ 04, 05 ], [ 03, 06 ], [ 04, 06 ] ],
				 start: [ 01, 04 ],
			   crate: [ [ 02, 04 ], [ 04, 03 ], [ 04, 05 ], [ 06, 04 ] ],
			   dots: [ [ 03, 03 ], [ 03, 04 ], [ 04, 03 ], [ 04, 04 ] ]
			 } ,
		   { dimension: 10,
			   floor: [ [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ], [ 01, 02 ],
			      [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 05, 02 ], [ 01, 03 ],
					  [ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 01, 04 ],
					  [ 02, 04 ], [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 01, 05 ],
						[ 02, 05 ], [ 03, 05 ], [ 04, 05 ] ],
				 start: [ 05, 01 ],
			 	 crate: [ [ 02, 02 ], [ 04, 02 ], [ 03, 03 ], [ 02, 04 ], [ 04, 04 ] ],
			   dots: [ [ 03, 01 ], [ 01, 03 ], [ 03, 03 ], [ 05, 03 ], [ 03, 05 ] ]
			 } ,
		   { dimension: 10,
			   floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ],
			      [ 06, 01 ], [ 07, 01 ], [ 01, 02 ], [ 02, 02 ], [ 03, 02 ],
						[ 04, 02 ], [ 05, 02 ], [ 06, 02 ], [ 07, 02 ], [ 01, 03 ],
						[ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ],
						[ 07, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 04, 04 ],
					  [ 05, 04 ], [ 06, 04 ], [ 07, 04 ], [ 01, 05 ], [ 02, 05 ],
						[ 03, 05 ], [ 04, 05 ], [ 05, 05 ], [ 06, 05 ], [ 07, 05 ],
					  [ 01, 06 ], [ 02, 06 ], [ 03, 06 ], [ 04, 06 ], [ 05, 06 ],
					  [ 06, 06 ], [ 07, 06 ], [ 01, 07 ], [ 02, 07 ], [ 03, 07 ],
					  [ 04, 07 ], [ 05, 07 ], [ 06, 07 ], [ 07, 07 ] ],
					start: [ 07, 07 ],
				  crate: [ [ 02, 02 ], [ 04, 02 ], [ 06, 02 ], [ 03, 03 ], [ 05, 03 ],
				    [ 02, 04 ], [ 04, 04 ], [ 06, 04 ], [ 03, 05 ], [ 05, 05 ],
					  [ 02, 06 ], [ 04, 06 ], [ 06, 06 ] ],
					dots: [ [ 03, 02 ], [ 05, 02 ], [ 02, 03 ], [ 04, 03 ], [ 06, 03 ],
				    [ 03, 04 ], [ 04, 04 ], [ 05, 04 ], [ 02, 05 ], [ 04, 05 ],
					  [ 06, 05 ], [ 03, 06 ], [ 05, 06 ] ]
			  } ,
				{ dimension: 10,
					floor: [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 04, 01 ], [ 05, 01 ],
 			       [ 06, 01 ], [ 07, 01 ], [ 01, 02 ], [ 02, 02 ], [ 03, 02 ],
 						 [ 04, 02 ], [ 05, 02 ], [ 06, 02 ], [ 07, 02 ], [ 01, 03 ],
 						 [ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ], [ 06, 03 ],
 						 [ 07, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ], [ 05, 04 ],
						 [ 06, 04 ], [ 07, 04 ], [ 01, 05 ], [ 02, 05 ], [ 03, 05 ],
						 [ 04, 05 ], [ 05, 05 ], [ 06, 05 ], [ 07, 05 ], [ 01, 06 ],
						 [ 02, 06 ], [ 03, 06 ], [ 04, 06 ], [ 05, 06 ], [ 06, 06 ],
						 [ 07, 06 ] ],
					start: [ 04, 06 ],
				  crate: [ [ 01, 02 ], [ 02, 02 ], [ 03, 02 ], [ 05, 02 ], [ 06, 02 ],
					   [ 07, 02 ], [ 01, 05 ], [ 02, 05 ], [ 03, 05 ], [ 04, 05 ],
						 [ 05, 05 ], [ 06, 05 ], [ 07, 05 ] ],
					dots: [ [ 01, 03 ], [ 02, 03 ], [ 03, 03 ], [ 04, 03 ], [ 05, 03 ],
					   [ 06, 03 ], [ 07, 03 ], [ 01, 04 ], [ 02, 04 ], [ 03, 04 ],
						 [ 05, 04 ], [ 06, 04 ], [ 07, 04 ] ]
				} ,
				{ dimension: 10,
					floor: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 06, 01 ], [ 07, 01 ],
				     [ 01, 02 ], [ 02, 02 ], [ 03, 02 ], [ 04, 02 ], [ 05, 02 ],
					   [ 06, 02 ], [ 07, 02 ], [ 01, 03 ], [ 02, 03 ], [ 03, 03 ],
					   [ 05, 03 ], [ 06, 03 ], [ 03, 04 ], [ 06, 04 ], [ 01, 05 ],
					   [ 02, 05 ], [ 03, 05 ], [ 04, 05 ], [ 05, 05 ], [ 06, 05 ],
					   [ 07, 05 ], [ 08, 05 ], [ 01, 06 ], [ 02, 06 ], [ 03, 06 ],
					   [ 06, 06 ], [ 08, 06 ], [ 01, 07 ], [ 02, 07 ], [ 03, 07 ],
					   [ 04, 07 ], [ 05, 07 ], [ 06, 07 ], [ 07, 07 ], [ 08, 07 ] ],
					 start: [ 07, 02 ],
				   crate: [ [ 02, 02 ], [ 03, 03 ], [ 06, 02 ], [ 03, 06 ], [ 04, 05 ],
				     [ 06, 06 ], [ 05, 07 ] ],
					 dots: [ [ 01, 01 ], [ 02, 01 ], [ 03, 01 ], [ 01, 02 ], [ 02, 02 ],
				     [ 03, 02 ] ]
				} ]
