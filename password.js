const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log(`Hello there. Welcome to the password validator tool :)


`);


// This section of code is the first itteration of creating the password validator by meeting the minimum requirements listed in the assessment. 

// reader.question("To begin, please provide a password to be validated: ", function(input) {
//     if (input.length >= 10){
//         console.log('Your passowrd meets the necessary requirements.');
//     }else{
//         console.log('Password is too weak. Please provide a password with at least 10 characters.');
//     }
//     reader.close()
// })

// This section of code is the second itteration of the passowrd validator. This seciton builds onto the first by adding additional constraints for length of password, upper and lowercase letters, and use of numbers.
reader.question("To begin, please provide a password to be validated: ", function(input) {
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/
    if (input.match(passw)){
        console.log(`
        #                                                                                                  
        #                                                                                                  
        #     SSSSSSSSSSSSSSS                                                                          !!! 
        #   SS:::::::::::::::S                                                                        !!:!!
        #  S:::::SSSSSS::::::S                                                                        !:::!
        #  S:::::S     SSSSSSS                                                                        !:::!
        #  S:::::S           uuuuuu    uuuuuuppppp   ppppppppp      eeeeeeeeeeee   rrrrr   rrrrrrrrr  !:::!
        #  S:::::S           u::::u    u::::up::::ppp:::::::::p   ee::::::::::::ee r::::rrr:::::::::r !:::!
        #   S::::SSSS        u::::u    u::::up:::::::::::::::::p e::::::eeeee:::::er:::::::::::::::::r!:::!
        #    SS::::::SSSSS   u::::u    u::::upp::::::ppppp::::::e::::::e     e:::::rr::::::rrrrr::::::!:::!
        #      SSS::::::::SS u::::u    u::::u p:::::p     p:::::e:::::::eeeee::::::er:::::r     r:::::!:::!
        #         SSSSSS::::Su::::u    u::::u p:::::p     p:::::e:::::::::::::::::e r:::::r     rrrrrr!:::!
        #              S:::::u::::u    u::::u p:::::p     p:::::e::::::eeeeeeeeeee  r:::::r           !!:!!
        #              S:::::u:::::uuuu:::::u p:::::p    p::::::e:::::::e           r:::::r            !!! 
        #  SSSSSSS     S:::::u:::::::::::::::up:::::ppppp:::::::e::::::::e          r:::::r                
        #  S::::::SSSSSS:::::Su:::::::::::::::p::::::::::::::::p e::::::::eeeeeeee  r:::::r            !!! 
        #  S:::::::::::::::SS  uu::::::::uu:::p::::::::::::::pp   ee:::::::::::::e  r:::::r           !!:!!
        #   SSSSSSSSSSSSSSS      uuuuuuuu  uuup::::::pppppppp       eeeeeeeeeeeeee  rrrrrrr            !!! 
        #                                     p:::::p                                                      
        #                                     p:::::p                                                      
        #                                    p:::::::p                                                     
        #                                    p:::::::p                                                     
        #                                    p:::::::p                                                     
        #                                    ppppppppp                                                     
        #                                                                                                  `);
        console.log('Your passowrd meets the necessary requirements. :)');
    }else{
        console.log(`
        #                                                                                                                                                               
        #                                                                                                                                                               
        #  WWWWWWWW                           WWWWWWWW  AAA              RRRRRRRRRRRRRRRRR  NNNNNNNN        NNNNNNNIIIIIIIIINNNNNNNN        NNNNNNNN       GGGGGGGGGGGGG
        #  W::::::W                           W::::::W A:::A             R::::::::::::::::R N:::::::N       N::::::I::::::::N:::::::N       N::::::N    GGG::::::::::::G
        #  W::::::W                           W::::::WA:::::A            R::::::RRRRRR:::::RN::::::::N      N::::::I::::::::N::::::::N      N::::::N  GG:::::::::::::::G
        #  W::::::W                           W::::::A:::::::A           RR:::::R     R:::::N:::::::::N     N::::::II::::::IN:::::::::N     N::::::N G:::::GGGGGGGG::::G
        #   W:::::W           WWWWW           W:::::A:::::::::A            R::::R     R:::::N::::::::::N    N::::::N I::::I N::::::::::N    N::::::NG:::::G       GGGGGG
        #    W:::::W         W:::::W         W:::::A:::::A:::::A           R::::R     R:::::N:::::::::::N   N::::::N I::::I N:::::::::::N   N::::::G:::::G              
        #     W:::::W       W:::::::W       W:::::A:::::A A:::::A          R::::RRRRRR:::::RN:::::::N::::N  N::::::N I::::I N:::::::N::::N  N::::::G:::::G              
        #      W:::::W     W:::::::::W     W:::::A:::::A   A:::::A         R:::::::::::::RR N::::::N N::::N N::::::N I::::I N::::::N N::::N N::::::G:::::G    GGGGGGGGGG
        #       W:::::W   W:::::W:::::W   W:::::A:::::A     A:::::A        R::::RRRRRR:::::RN::::::N  N::::N:::::::N I::::I N::::::N  N::::N:::::::G:::::G    G::::::::G
        #        W:::::W W:::::W W:::::W W:::::A:::::AAAAAAAAA:::::A       R::::R     R:::::N::::::N   N:::::::::::N I::::I N::::::N   N:::::::::::G:::::G    GGGGG::::G
        #         W:::::W:::::W   W:::::W:::::A:::::::::::::::::::::A      R::::R     R:::::N::::::N    N::::::::::N I::::I N::::::N    N::::::::::G:::::G        G::::G
        #          W:::::::::W     W:::::::::A:::::AAAAAAAAAAAAA:::::A     R::::R     R:::::N::::::N     N:::::::::N I::::I N::::::N     N:::::::::NG:::::G       G::::G
        #           W:::::::W       W:::::::A:::::A             A:::::A  RR:::::R     R:::::N::::::N      N::::::::II::::::IN::::::N      N::::::::N G:::::GGGGGGGG::::G
        #            W:::::W         W:::::A:::::A               A:::::A R::::::R     R:::::N::::::N       N:::::::I::::::::N::::::N       N:::::::N  GG:::::::::::::::G
        #             W:::W           W:::A:::::A                 A:::::AR::::::R     R:::::N::::::N        N::::::I::::::::N::::::N        N::::::N    GGG::::::GGG:::G
        #              WWW             WWAAAAAAA                   AAAAAARRRRRRRR     RRRRRRNNNNNNNN         NNNNNNIIIIIIIIINNNNNNNN         NNNNNNN       GGGGGG   GGGG
        #                                                                                                                                                               
        #                                                                                                                                                               
        #                                                                                                                                                               
        #                                                                                                                                                               
        #                                                                                                                                                               
        #                                                                                                                                                               
        #                                                                                                                                                               `);
        console.log('WARNING: PASSWORD IS TOO WEAK. Please provide a password between 7 and 20 characters which contain one numeric digit, one uppercase and one lowercase letter.');
    }
    reader.close()
})
