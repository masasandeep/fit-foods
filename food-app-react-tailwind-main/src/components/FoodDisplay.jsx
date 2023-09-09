import React from "react";
import FoodCard from "./FoodCard";

function FoodData() {
  const foods = [
    {
      name: "Apple",
      imageSrc: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaHBwaHBocGRodHBocGhoaHh4aHBocIS4lHx4uHxgeJjgmKy8xNTY1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjYrJSs0NDY0NjU0NDQ0NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUHBgj/xAA+EAABAwIDBQYEBAUDBAMAAAABAAIRAyEEMUESUWFxgQUGkaGx8BMiwdEHMuHxQlJicoJTksIUQ6KzFRYj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAQQBBAAGAwAAAAAAAAABAhEDBBIhMUEFIlFhE3GBobHRFCMy/9oADAMBAAIRAxEAPwD2ZERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARFhAFQ7U7Sp0GbdQw2Q3qfQcSr6+R/ELsplXDGoQS6kQRcxsuewPBGRsJG4jmqTk1FtFopOSTOp2D3ho4s1BSJ/wDzLQZsSHCQY5gjou0vMvwpo7NfFwTGzRz4mqV6aoxS3RUvktlioyaRlERaGYREQBERAEREAREQBERAEREAREQBERAEREBhEVHtHtOlQbtVXtaOJueQzPRCUnJ0i8kr4HtH8QBJGHpFwy+I8Q3o0X8YXy+K7XxNadus8z/C1xaOWyyJHQrJ5Yo78XpuafL4X3/R6zie1KNMw+qxp3FzQfCZVGp3owo/7k8mPPo1eX4akAco3wfXVfVdnYZjxcX8xyVPxvg6Zem48aucm/yPpP8A7Th9C8/4OVXtLvBh6lF7Zd87HtHyP1aRnFrkKk7s1jbgXlS4fAMINovl5qHOT44Mnp9Olas+f/D7H06VWuajg3bbSgmYOyakych+YZ716Jhu0aT/AMlRjv7XA+i8q7s4Rr6lQH+FrY6k/ZdvEdigkbPmAY8VngyNY1wTLS48jvdT/Y9ECyvPaIxFC7aztn+Vx2mxuh0x0hWsJ36uWvpF5GtPI9HH6roWaL74OeWgydw5X0fcIvmsP3tY4x8GuP8AAHqdlx9hdKn23QObwDucC31V1JPpnPLDki6cWdRFFRrscJa5rhvBBHiFKrGQREQBERAEREAREQBERAEREBhCUXyPeftDaY4fE+HRbZ9TV942W75NrZmcgLw3SL44OcqRU7f76w51HCAOeLOqESxmcxvIjkvP8Zii5205xqvJuSSR0P2kKPE4zbOxSaWUhpqY1cRr5LbD0w2wEazFyuKc23yz6nSaKGKPX9kjcK90S5o5AegF1Z/6AtFp57KvYJhAmJJ3b/XwV3abEuM8NOls1WzafDpHLomDmN0G3gSLeYX0PZeIaP4gOZH3XLrMa45RNh738Vaw3YrTEgHXgoeNy6Zz5oxcfc6O6/Fsy22/7gsDFBocZEbM56gFUm9hs/lHUT6oOwKczsjwCLBJdM4tmNcX+xxe7j/hvquc13zbDWxrs7c55Zhdo46s7JoYN/5nDqRHkuhQ7PawWCnFERdWhiaVWQ5QXizkuovcPmc48ifQKB+AMWc48Npy7oAhY2QAr/hkrLXg+SrYLXdre36Km/BkGdN+R6r6PFVGzGRXPqRmDfX2FhJbTug210csOqU3bTHvad4cbfovpOwe+7gQzEgEf6jYtzAzHEea4OIp7uoH2PoqT2jKONsjxCmGaUemVy6bHljUl+vk9noVmvaHNILSJBBkEKQryfu/3idhXbJl9I5jdvIXqGCxbKrA9hDmuEghd0MikuD5/U6WWCXPXhlpERaHMEREAREQBERAERQ16oY0vJgNBJ6IDk94e1W0mOBcB8pLjubB3XvwvAMXXj/bXbLsQ8NMimyNhluUuAMbR3Cwy0We+HeN2JqOa38gcSf6iLAHgLW3zuC4uHAgWkkxx4++K48+S+EfSem6RRW+S5OvhmybCw0GUyfIbstV1MJTvLr7t39t/XqqOGdP8IAN4GQBNhJOccdy7FN0WAgxFxkuWz1JvwTPqEaAF0u03xAAyEjyUO0XOi/Dib+SkpU41V3DU2i7vf6LWKMW1BDCYM7VwRC7mGpRc5qiMW1u77LV3bAFlvFxRxZFkydI7JK124XBrdtADjBygDhn6KqO1HfxaqXkRSGkm+z6g4gKnicZAXz1TtQ6eKrHtPaEHKevUwqvIvBtDRNO2dgdpHaMTv13K2/tGWzkvmviSRH7+CtNqBzc9P2We9o2lp48Oixi6hcS4Ztk9AFQdiJvHv2FMDaNLqBoiWnp75LKb3F4pRVELaga4gmA7Um3OfeaiqPBHpwUWJaC0nUT4RpxWrasNBkEGOc5fZYO1yXcfJkuk2tGR3Lrd0O3Tha/w6hilUIDhox5sHD+k5HhB0XCJN4yOm5V8S2QbSI8be/BbY57ZWjlz4o5IOMumfoALK+S/D3tv/qMOGOdNSjDHXklsfI882iCd7XL6xeommrR8vODhJxfg2REUlQiIgCIiAwvhvxQ7cNCgKbPzvg8gHCJ4Ez/ALV9yvCvxQ7Q+JjnMBkUw1vIxJHi4+KpklUbOnSY9+VJnyuHbNzff9z4ldKgwSLXnwkGx4xHkq+DZEEgls38Ljz8wrrNbXOuXL1XmzlyfW4eEXmVRsyL6Aec+auMqgNmbzxGQuep9FzMMNpwjIH6BW6wGU2G4LK6NJV0X6OIvndTNrySAbRInU20XGIIk62zCt4F5IO1vPD3dX3MrKK7OqSZIBkW14aaqlUf+m5YfWA0jf8AVValQHKwv4qN5EI0SV6suLoibAXN+fRaCpIFyBlMTczne1tVWe6bE670cwmJy09fr5qjyUapJI3rPho3z4rWgQ0yQ4t1Az81UxDyLa+PH3yUjK2bSLnIj6afsFMZMu/+S6MRAg6XU1GtcAa+u5UGvz9N3OynY4y08fWVpu4MZI6r6nFR1Tn7lQudrJkafVRPqEBpOWXOw+6ruMPyNxBaZz0Ee+Cp0WwXA2GY9+8lay1ysVWe6495qsuUPkwc9YOm/wByoqj4Ea5jish+5Q4l+0J9OuarBspJHZ/D/tL4OOa0mGVgaZ3bX5mHnLS3/Ne0L83OxDmObUbZzHNe3m0hzfMea/RmHrB7GuGTmhw5EAj1XqaeVxo8D1HHtyKXyToiLoPPCIiAIiIDBX5q7ZqbWNxDjfarPcJ/qe4t6QR5L9KFfmrGtmvVGoeRw+VxB9AsM7qJ6Hpy/wBjJaTPm5Wy4Qp20yZgE5ZeuWSYRggmb6cTqrVKTtAGJ9Jn2F5knyfSwdLgnwTwATGvzDQk8fLqpmEAi1r299VCWbOzoD0yied1q4/MPTluUXTsl88nUY4GZ3rDy2CLjl74KHbJtECNLXUT6l43X/TirSlaKJNmtZ0CBOXKFWdUIFzlprugrbGPJGcfbcq1UbQDRreRnzWSOiPRPVcAbOB0t06wm3rO4zPFU9kjzmNxWSbXIBG45nTmjjZbwT1qu04udckyT4WgclE597X9/qm3In0O9bCjtOAHQkx6ouxaiiy2CevXJbudDdx0+hVQPJjfP0yV7EjabkJjSwsrxZlJ8m+3z8rcFpiMtJH0H6eSgqWI0k5KdwBEE5a71Pky6ZuXyJHvIqtFxHCQfeeqy4/MRfTNbNFveUqX0OiCpUIO4yY9fU+SjqEjhIt5W8vJSVfm+WwPs3PVV6txyJv0VF2VfJVqmxn03j9V7p3HrbWAwx3U2t/2DZ/4rw7ECQbjOCdOJXsv4auJ7PpTo6qPCq9ehpnyzx/U17U/s+rREXYeMEREAREQGF+c+2qOxi8QIyrPtzeT9Qv0YvBO+1HZ7RxAIMF7XbrOYx0j0XPqF7T0PTnWRr6KNBtj76+alwzryNPoVHRA2do5zYcD9vqpsNT+b6+Oa85K2fSQfBNUMlonKT4woqj456cY3lTV6JAa7LOOXTVV67JgnTXnZHEumi3Tr2yv9FUxNcuqEjKBaLSAtgwxyMeGipPJa42tnfd9MlFFoxV2WsS/5ZB3ZKOjX2oAHA5QmIE0wcsvr76LOGpbLHOkTa2p5coVa9pe0kbunz8VC/cB5LDXk6xaefVSUHyVWqI6NGPcIBEgTGWtzzWX1I4+O/epQZ8baxxVaswtkcYUrlhcltw2c4MQbGcxPsKwyqSPJc2jTdBzjSdVewFPasSABe/vJW2lJUlyZey4jSw4cVI4wOHXyW1NnzcItzUWJFrZz5KUZ9slbB0+qkc/+GY6WyA04KPQGbnxF/r9FmsQWk2sD+9lLRWrZUxDNwi0/XLko6dmkb7TuyUrGgMJOZy1z4KOkLTyI81TyJdFV35YzztbUL2L8MxHZ9L+6r/7XryTENAEQN/g3yXs/cWjs4DDjezb/wB5L/8Aku/S9s8f1J+xL7PoURF2nihERAEREBheP/irhNjGMqaVaYH+VN1/JzV7AviPxS7N+JhW1AL0XBx/scNlw8dk9Fnljug0dGlnsypnmDG2iOmXUK7hmEmdwy6KvgSJ5tEc9/kr3xIIjqPfvNeYkfTxk6o1eJblktAz5ffv91MxpdI0j9fqthTAE33/AKKbJUvBExsAb/c+Sp9pUi521v8AfRdN+y4AwY13+HVVsQ2WiBx5Qpo0jLmym+n8jROcT76LSrSJMAfLO5W2XAvYSpGSJB1z1/ZVcTTc0c2hhiflz3KyyhGZvy6K69kXFjoft1WGUoJEzIuf3VGiHNsovqQ3ZA1zOdvopmUwQJFoupMRTt1t76LdtM2G7x6KNpF8cFMuN2hoEa+9FLTGwN6sVqbdr5SYHDPesPaIt67leKI3JoxSuQNI9VvVAktGkX96ZLZogAgaX8lOWERlcSeRU1yUb5KlGntPHKyyac2ykz4/v5q2KIEXvJNjlz81u5kbI3/Y/orFXI5YpNEXNsr34z70WrXbVouL+wui5l51jdxKoVWHaHieuX0WMo82Q5WVKlEuJa0S5+yxg/qdAHqvfsJQDKbGDJrWtHJogei8k7m4L4uMZNwwmo7/ABHy9dp7fNexL0tNGo2eD6jO5qPwZREXSecEREAREQBV8Zhm1GPpuEtcC0jgRCsIgPDKfZ7qVSpSd+Zji3mATB6iD1UrmCIi4K+0759lAVPjtH52hrubcj1B/wDEL5CozdyXBkhtdH0WlzqcEyvskdVhlMunQj0UwaT4+wo3EgwPDfzWNHbF312RM3WngptjamOI8v1WWxcQTNs/NRFpBgdR9uqk07I2Mizvd1NUgxAII458lo/z3Tl7lbjK51UMl/Jq9vG/7rZ4AEcZ4zG9afEggRJ96JiKLibDTL3zUUPPJM5gcAYss7NxrAUlPKN3PVYZsibGSDHC4uVBS2QNAvM2RzATlpb7KaJOXVZeDtTF927w93UomzZlP5b6QlG/JTMdtbj0zWlFnyRG6eCkpZo4icrFTFocSchFhwR75ny89fea3a6xG8Z77IZyfBE6nInLlr9wuZXpkGBMnWNJ9+C7DfmtFsvJT4Dsw1q7GgRqT9fCVZQ3cGM8igm2fR/h12V8OnUrOHzVHQJ/laSPNxd4BfaKGhRaxrWtEAAADgFMvRjHaqPnss3Obk/JlERWMwiIgCIiAIiICp2hhBVpuYdRbgdCvLsdhHMe5sQQYjiCvW18r3u7L2h8ZouLOA1GhWeSNqzr0mbZLa+meftaZMT+37KNrswc56kfsrNaxmFXLZ+YaBcEuGe/jlYIIdsidCM8lhzsibmdVu+BB1jmYUYqB0QZvnx4qpuvk1fDTbI/Zb7URlfTxmVo4S63UazPmI9VhzJ0i58tELowBLwdkRu05KyX3+a9o971DSt7C3fUBEARb0+qhkSXJJTfF7HmsgDMlRsIsRNxeRAW2JAi08fKFBn5NmASIuNDe8qaADfyy8VCx1hMxlzUnxA7IdffJBKzI/KI1OU8VtJyvujl+yyyoLxpu3aqvUqGZ00v73qUypISOX6CE2MyMhra2WfHNQseIzM623QgP2H7dVZFZcF/Ctk+S+77s9n7DfiOHzOFuW/qvnO7HZZquBIOw25O/cBxPp0XoIbAXZhhXLPF1ue3tX6m6Ii6DzgiIgCIiAIiIAiIgC0e0EEESDYhbogPNu83ZBoPkCabpg7j/KePqORXzjzExvmJjz6L2LGYRtVjmPEtOf3G4rzDt/sd+Hd812H8r4sRuO53BcebFXK6PX0eqTW2Xf8AJyA2btN8oPmowIkaHUZzrH67lrUfG/p79wtA6dbzxi6491HrRmbvbMjdv98MlvReRE2BGfP3monjUaaTePZWWOabOFhcJuNNyolZsh2ZIziDqtngHIfpxKqueA6Ra15EZa+KmfU0FrQb58Pe5HIhvybscPyxJ4Spn1ZbeL+9FUY+CBGZN9fdls2rLssp1Hp0UORDfNk7Sct3qpC02nKIH2soWCL9Z3zwWj694GXvfqq7jNyt8E4cNPZ/dV3vJME2nLXfn7zVZtV21mLiPO/osl4vf3vUphyUeyy+oJIiOU9eq63YHZb8Q8NYIaILnRZo95DXxiLu92FVxL5A2WCznkWG8D+Z3DTWF6n2Z2cygwMYIAzOpO8nUrtw4W+X0eZqtYktsOzfA4NtJgY0QB4nieKtIi7TyG75ZlERCAiIgCIiAIiIAiIgCIiAwquMwzXtLXtDmnMEW/fira1KBOjy7vF3VNMl1Ey3+R35hydk7rHVfHPe5h2TLSMgR+y93xWFDxBXyfa3dRj5suPLp0+Uejh1ckqlyeYnEdN1+XnZaioQ4GbHSZgr6XG9yHj8pIXJrd08S3IzzH2XM8EkdsdZEp1asnPW2/7hb08SNOVjHmtH9hYpv8APiFEOzMSM6Xn+iq8Ei3+ZGqJ6mJG7Q+7cSsYap/UL+Pgojga/+k7xWW4HEaUT1UfgyqqD1Ua7LxxVuQtJUPxgZPrHsrWl2RiT/wBuOp+yv4bupiXxtGBwCmOnkZPVRXRzTUkwJnTeV9d3V7sfEcH15LdGAxP9zs+g8Vf7E7lhhBdc7yvucFggwAALtxYFHlnHm1cpcJlnD0WtaGtaGtAgAAAAbgBkp1gBZXUcAREQBERAEREAREQBERAEREAREQBERAYhalgW6ICB1AHRaOwbTorKKKRNsons9m4LQ9ls3BdJE2onczlf/Es/lC2HZTP5QumijahuZz29nM3BTswjRorCKaRG5mrWALdEUkBERAEREAREQBERAEREAREQBERAEREAREQBERAYRZRAEREAREQBERAEREAREQBERAEREAREQBERAf/Z",
      nutrition: {
        calories: 52,
        carbohydrates: 14,
        fat: 0.2,
        protein: 0.3
      }
    },
    {
      name: "Banana",
      imageSrc: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEA4PDhAQEA8NDw0NDQ8ODQ8NEA8QFRIWFhURFRUYHSggGBolGxUVIT0hJikrLi4uFyAzOTMtNygtLisBCgoKDg0OFxAQGi4fHx0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8rLS0tLS0tLS0tLS4tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADkQAAIBAwEFBQcCAwkAAAAAAAABAgMEESEFEjFBURNhcYGRBiIyYqGx0RVSgsHwBxQzQnKDkpPh/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAUDBv/EAC8RAQACAgEDAgUEAgIDAQAAAAABAgMRBBIhMRNBBRQiUWEyQnGhkbGB8FLB0SP/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWc0uPh/XUiZ0aTFppNap6prVNEiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ2RM6Hi/bfbdN0pW0Z7tXfhNOOcJRknnK4M52Tk9cTWI8S6HHwdM9U/Z6D2Wr79nbyzvZhjOudG1rnXkbOPO8cMmeNZJdU9nkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5v2xqXCptWrjGpJJKU3otdeT5HH51ppmiZ3qYbuJWLRL5Jt+jc0XCVabnvJ5mllb3OMm+LGC1Mm9Q1ZJmr6X/ZjtGrUtoxmluJSdLk0lLGF3czTxs3/AOk4fsx8mkdMX95e0N7GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABo7Yob1KXWPvL+Zj52KL4p/Hd78e/TePy8Zf2dOrFwqRU4vjF8DgxeaTurra9na9kqEab7OCUYRhuxS4JJo1/DrzPImZ8zEsnMj6I/l6c77mgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUrxzGS6xkvoVvG6zCazq0S8RI+RmXddLYFTFVLqpL6Gn4dbXIr+ds3KjeOXqD6dygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHhqnGXdKS+p8fk7WmHcjxDLs2ritTfzwXq8fzLca2s1J/MPPNG6We0PrnHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMSPAXNT3pP5pfc+Ly23eZ/LuxHaC3k8qS0aaaz1RakzExP2VtG4mHtLW+jNZ4dcPKR9Jh59Mnns5N8U1baNsTE+HkEgAAAAAAAAAAAAAAAAAAAAAAAhyS4vBW16172nSdMdK4hJyUXlwaUtHppnzIpet43Wdk1mPLKXQAAAADX2hU3aU38rS89DNzMnp4bS9cNeq8Q8Y6J8nEbdlMYYLobNvcSg8plYvas7hS1ItGpdyxv1Lx5r+Z1eJzp8f0w5cGnThNPgdvHkreNwyTEwseiAAAAAAAAAAAAAAAAAAABM6GKrXjHizLm5mLF5letJlpVr6T0gjkZ/iWW/wBOONNFMER3s591cY1qSbf7YvU5WfLrvktufs046b/TDgbTuKk2pQk6cqbzB05OD8G1q0RxfiGTHeJmdQ9bYa615ep9mtrOvTxUWKtPCn0n8/ReB9dxuTXPXcOZmxdE/h2DS8QAAA5m3p4ppdWcr4tbWKI+8tfDjd9vPM+fh01SwhlZgTTquLynjBXvE7hE1ie0u3s6+3sJvEl9fA6XF5Wp1M6lhzYenx4danVT8Tu4eRF+0+WK1dMpoVAAAAAAAAAAAAAAAIbIm0R5GGdwuRjycysdqvSMcsEqrZjvmvkekUiGvWlGOs2l3c2Y8np4++Sf+HrWJt2q51ztFvSHurrzOZm5trdscdMf214+NHm3dzpSyY4r7tTWqLJS0ImHa9k6eJ1O+Ovqj6H4DM9Vv4c/mx2h6c+mc4AAAOT7QL3YeLRyPi0fRWW3hT9UuI4nC06G1GiYFWRJtDRVIngiYHVsto8Izev7vyasHK19N/8ALJlwe9XYpV34o7WLl2iO/eGK2NsQmnwN9Mtb+JeUxMLHogAAAAAAAAAAIbK2vEeTTFOsZsnJiI7LxRrTm2YL5L3ns9YrEMdWcY/G0u7meGS2PFH1zr8PStbW8Q51ztTlBYXXmc7N8Qtbtj7R/bVj4vvZzalRt5bz4nPnczuWuKxHhQaWTgtpCu6VmB6fYNruU958Z6+XI+t+Ecf0sPVPmzj8vJ1X1Hs6Z1WUAAANPatHepvqtUYufj68M/h78e/Td5/B83p1JlSUSDbFJESlTJRJJBKhSYS3LS/lHR6roy2PPfF47x9nlfDWzr215GXB4fRnSw8ul/xLHkw2r5b0Kz56nUpybx57s00hljVRpryKz5UmkrKoup6RmpPujUpyW6o+6Ek7gRkTaI9xDmuqKzkpHunUo7RFPXp7SdMqyro87cqPZaKSxyrsz25Np8LRRTLPP6p7rdmCtcQj8T8kZs3Jw4/1Tv8AEPSmO9vEOfcbUfCC3e/izm5viN7dqR0x/bXTix5s5tSo3q3nxOfO7TuWqtYjwxsnSyALpEwhZRLRCNtiytt+cY9Xr3LmaONx5zZa0j/sPLLl6KTL1kY4SS4JJI+0rERGo9nE3vukkAAACJLKa6kTETGpHn7q33JNcs5R8zycM4skw6mPJ112wSgZ5h6RLBOJSYXiWFwKaWQQlDKiMETCUxeOBSap8tyhtGcdOK6PU9sfIyY/EvG+Clm9R2pF8U0zdj+IR+6Ga3FtHhtQuYPhJeppjk4rfueM47R7Mmj4Nep6arPiVUrJaIt7I7J1Lak7A6deRWVRc5JeZ52y0jzaExWfswzu6a4yz4HlblYI99rxivPs16m1Ir4VnxM1/iMR+ir2rxbT5lo19oTlzwui0MGXlZcnmWinHpVqymZ9PfSjY0IAYAsoltI2yxiXiqNrpHpFUbd3Y1rux33xnw7kfQ/C+L6dJyW82/05nKy9VumPEOkdZkAAAAAA1r62346cVwMfM4/q07eYe2HJ0S4rWNGfPzExOpb97jcMVWmUmF6ywuJ5vRjnArMJYWsFUmSsiUQkINhGjYpDSV41WuDfqEdMSurqa/zP1ZaL3j3R6dPsn++VP3P1J9S//lKPSp9lXcyfGT9Sk2tPun06/ZVzfUqtqFd4hKMgQAAgI2lInQskWiqGRRLxVDIkekVRtvbNst+WZfBF6/M+h0+BxPVt1W8R/bLyM3RGo8y76R9E5iQAAAAAAANK+s973o/F9znczh+p9VPP+2jDm6e0+HJksaPRnCncdpbo794YJlJekMTZVZjmisphhwVmEpSKaEgCqUACACQARMoABCQIMExAnBaIBInSFkToXReIFoloQ37CxdR5ekOb69yN/E4ds07ntWP+9mbPnikajy79OCSSSwlokfSVrFYiI8Q5kzMzuViyAAAAAAAAABqXtkprK0lyfXxMPL4Vc3eO0vbFmmn8ODXpyg3Gaw+T5M+ey474rdN4dOlovG4YGea6jkRsUbKpEyEhAgrMANCMEaNmCNGzBGgGgGgJ0JGgySJyAySCJgZYLOiWXySPStZmdQiZ15dew2U9JVdFyjz8zs8X4ZP6sv8Aj/6w5uV7U/y7MYpLC0S4I7cViI1DBM7SSAAAAAAAAAAAAxV6EZrEln7o8c2CmWvTaF6XtSdw87tPZlSnmUE5w44jrJeXM4PJ+HXx9694dLDya37T2lyI3Kflo+q8Tmztp1pLmU2I7QjYdoNiVMbE9oBO8BKkA3iA3hsRvjYjfI2DmRMp0jtCOo0b5O06WUyYQ6VhsurUw2tyHWS1fgjrcb4Zkyd7fTH9suXlUp2jvL0FpZQpr3Vrzk9WzvYOLjwx9Mf8udky2v5bJoeYAAAAAAAAAAAAAAAA5u0tiUa2so7s+VSHuy8+pkz8LFm8xqfvD3x8m9O3mHnrv2euKeXDFaPd7s8eD0fkcPP8KzU70+qP7b6cvHbz2cqrKUXiacX0knFnLvW1J1aNNMTE94U7YrtKe27yu0aSqxPULKuR1Ce3HUHbDqNHbEdRpHbDadHbEbNHahLNb0alT/DhKffGLa83wR7YuPly/orMqWyVr+qdOzZ+ztR4dWSgv2r35fhfU6+D4LknvknX4jvLJk5tY/TG3bs9l0qesY5l+6XvS/8API7ODg4cPete/wB58sWTPkv5lumt4gAAAAAAAAAAAAAAACHJEbg0o60epX1KrdMqSuo95Wc0J9OWKV+lyfqec8j8LRilq3V9TksTpKa6SSl9zxyZovGrU3/L0rimPFtPP39tavLjSqU31pzePR5RzM3Fw28U1/E/+mul7x5ttwLqnu/A5tdJU390YLcKfZpi7nTvpR4wm/CEjz+UutuFFthc41F/tT/BE8PIdllteHzf9cvwV+UyfY2t+rQ6y/4T/A+Vy/Y3CY7TT4KT/gkvuh8pkTuG7by3uMlH+GTf2PSvBvPurN4h2bOwovHaTqS7oRjTX1ya8fw/H++Zn+njfLb9undsqFpDG7RTfWeZv6nSw4OPj8Y/89/9sl7ZbfudaF5HkjfGePszzjlkVwi8ZYlXoldVUW64R0ysponqhGk7yJ3CNGSdiQAAAAAAAAAAAArJETAwTpM85qvEsMqLK9C/Uo6L6EdEp6oVds+jI9OTrhR2MnyInFJ6kKvZbfIejKfVUex+5epHoSetCHsTuXqPl0+tCP0HuiPlz1z9BXSJHy566P0BdIj5Y9cWwe6I+WPXXWxP9JPy8o9ZeOyWunqT6Enqwyx2fJdPUn0ZR6kMis5f0yfSlHqQsraRPpyjrhZUZDok6oSqciemUbhZRfQnUo3CyyT3OyybJ7oTvFkLKQ2hOSRIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=",
      nutrition: {
        calories: 105,
        carbohydrates: 27,
        fat: 0.3,
        protein: 1.3
      }
    }
    // Add more food items as needed
  ];

  return (
    <div className="App">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {foods.map((food, index) => (
          <FoodCard key={index} food={food} />
        ))}
      </div>
    </div>
  );
}

export default FoodData;