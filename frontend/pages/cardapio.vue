<template>
  <v-container>
    <h2 class="display-2 mb-4">Nossos produtos:</h2>

    <v-layout row wrap>
      <template v-for="(produto, index) in produtos">
        <v-flex xs2 pa-1 :key="index">
          <v-hover>
            <v-card slot-scope="{hover}" class="mx-auto" color="gray lighten-4" max-width="600" height="350">
              <v-img :src="produto.img" :aspect-ratio="16/9">
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out blue-grey draken-2 display-3 v-card--reveal display3 black--text" style="height: 100%">
                    R${{produto.preco}}
                  </div>
                </v-expand-transition>
              </v-img>

              <v-cart-text class="pt-4">
                <!-- <v-btn absolute color="green" class="white--text" fab medium right top>
                  <v-icon>shopping_cart</v-icon>
                </v-btn> -->
                <v-btn absolute color="red" class="white--text" fab small left top>
                  <v-icon>mdi-basket-minus</v-icon>
                </v-btn>
                <v-btn absolute color="green" class="white--text" fab small right top>
                  <v-icon>mdi-basket-plus</v-icon>
                </v-btn>
                <!-- <v-btn icon ripple>
                  <v-icon color="error">mdi-basket-minus</v-icon>
                </v-btn> -->

                <h3 class="display-1 font-weight-light blue-grey--text mb-2">{{produto.nome}}</h3>
                <v-divider />
                <div class="font-weight-light mb-2">{{produto.descricao}}</div>
              </v-cart-text>
            </v-card>
          </v-hover>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    produtos: [{
      id: 'brohmo',
      nome: 'Cerveja Brohmo lata',
      preco: 2.50,
      img: 'https://static.clubeextra.com.br/img/uploads/1/677/556677.jpg',
      descricao: 'A  número 0.',
      quantidade: 8
    },
    {
      id: 'scol',
      nome: 'Cerveja Scol Lata',
      preco: 2.50,
      img: 'https://www.paodeacucar.com/img/uploads/1/497/693497.jpg',
      descricao: 'Scolzinha gelada, desce fazendo drift.',
      quantidade: 12
    },
    {
      id: 'amaisbarata',
      nome: 'A mais Barata',
      preco: 2.00,
      img: 'https://images.tcdn.com.br/img/img_prod/420472/garrafa_long_neck_355ml_165_1_20171205142401.png',
      descricao: 'Churrasco com os amigos? Melhor levar A mais barata.',
      quantidade: 5
    },
    {
      id: 'leite',
      nome: 'Leite',
      preco: 4,
      img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFhUWFxUYGBcXGBUVGBYYGBUWFhcXFxUYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0dHyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAACBQEGBwj/xABAEAABAwIDBQYEBAQFAwUAAAABAAIRAyEEMUEFElFhgSJxkaGx8AYTwdEyQlLhFCNi8QckcoKikrLDFTNTo8L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAlEQEBAAICAwABAwUAAAAAAAAAAQIRITEDEkHwIlFhEzJxoeH/2gAMAwEAAhEDEQA/APpQCgZrKm+clZoXVHCbe8l2mVICtkgjqModSjF0Wk45LhqCYKBQsg+ivIjJdqNzHDJDa+6AbrTdLVqoGZvwCPXOsJKpSLtYPFZqh18aYjd80tT2g4WIRquDqcWoA2c8ntO8FxuWUdJIfw2JLjxjRPUqkpLBYIM1K0dybxku0vDnVWPurlwXBpZBr1HHstEDV35jyaDYDmfPSoMXAZwO8gT3DM9ErX3XiPlveDbRjf8AlfyWlhcEGsJA7R1Mkn/cUuXcj6qcBvZeymuYC5nK9QuNuJ3RdHxmz2spuc1rCQJiHepcfRd2djhG7z96I+1q0UXG0Re+U24KWDzjcdGbR0At4BVNZzh2Xgd7AY6SFSoBnmErTeQSDAGh+ilXRlrqwzdSdw/lvZ/5CufxD/zMb/tqfRzR6ou7MXVHsOQUirOxDPzFzObmnd6vbLR1hWYSBMhwORBBB7iLFBqZlDosNy2xP/L/AFDJ3VA6JzXI5ITHvaASOy7KJInIgE6WUNfgCmxccEKtT4KrsQrCqHays7UENnPqruFldrYUKAJQwiFsIL2oqGFEIwuqcj0IlEDku4O4ItOkNV33tzF3rKQYUaVwuQEpu80viKesqzH/ALKVKsdxQLh8GD4qhF/fijVxpqlSb9yC+96qshQg+9QuOEjmPMKVVjTJyuh1KTrQ3q4wPutbZ1YtaP6mmMs94g+QHgUtinKBBrH6vgf0gDxJlaeGq7thHfAnxN0pTYU1Rou5noVYi2KquIztafG/klmPcDoROZ3TJ6i3dITT8K4iN1yqzBuyLTBHspQRuMJMOEd0wO8Zjz70qH3TWAaCIN4nPQ8uCv8AwF7OPc4NePEje/5KBQM1TNeuH0nsOZbHC2UhOUsDa4E8pHkSuVNnNzgmOd/WE2PLspmmA0mRcA5cwDzjxg9yHVaYheiq4NpEGlUzB0sRlcOQn7OYfyVR3AfUqbVkYWraDn6p3DNnonaGx6Y7X8yeB3R6JkYWmPynxJ8gmjbBrQSfBXpYZ5HZE8FqVCxv4WeQ/uq0qznA6d3fxRWfjmEbrTEgCwyaMonU6lL0zBur1nkuJ0OX0VHGRCyRd4BFwOSCKfgrsqGI15qb5m4UVHGy5K6Sh7sKiru9BcUV6XMgqWrAH03TY2URw0eyos+jXs9OAqu5eCshF69DisPJdIQ22U39EFXWQ8QJajN70M6jiipHokq8hwI6pig6xnMLtS+WSiBNqb2Sjc/dj9lDSg7zeo49yI0D8WfdqEVosoAsA1AbB4SN4/8Ad5KNwpbcje5fvn0gqU6wBPf6W+i6/EFZtQaniKYsGweBF/umqdcHUeKzPmEorHjgPRTYdfXhU/izwSb4UaOZ8vsiuYAfzHjmD4/2WpvgLKoVWioeOXeMwnC5XYY+aulyA0qxKg4565vqjiuBATfVXOXF2FAvVCAQQHH+kn1TVQTYXKmKphlJxd+kjMASbC/eUlHnQeauIKGzCv1BFpk2nu4oj8NvHUAC97WzJKqqPOo0VmvBEys3aGKp0xJpPeMgQ2ef5jYeV0PZvxGx7tz5NQXOjY8Wkjh4rM5ptouPmuPceieds97my0EHg4bp+yziSDuuBa7gde5W8G1ZjW3opUMn6qleGiTb6oZxIvy6KdNBPLwY3Z6/souGu3ifFRY9WtvVdT6qhJGa653v31QzVlepxddUVRVEqjnRp+3v6obuN0DDHXH7eC7Vdrmg025FXqP4++qgpTMPdOtwu1ndQbpcuEg6zHQrmOd+E8+5B3CYoXBge8kxTsRH4SdNCT6JH5AcDGpnqm8O4CAorPwu1CHHvPqtzD4lj9YPPLxXhmP7S2MFWK8mPks4rpli9T8g6X7rroZGYKSwtUrSo1ncSu0srmru8l1rCm21Dy8AiN7h4LQ8ntKoW1j09An8HjDxWX8QP/zDunoETZ7lwlvtXSziPR0q88EcQdPNIUCnaZXaVzEFIc10UBzVmojVQMUBzVhQHBECtCCgYBosT4oedxlMZ1C9v/1PE9CQVvLz/wAUvIFMgkQ+bcRcTykT0QIbS2jDTxkBp07TnAZ8AwjhrlC29j4JtOkHVYJIm+nK+a8jWh4AdeC0gixaWkkQR3nxTVbHVC1rS4kAQAkXQXxBQFZ87x3Zs0BpaOhEJTZlFtGpvvpsqAaik1jx/uaRPgrixzN9Dl6Kz8RH2S3ldNs7TYR/LL6TuFnNPe11vC/MKlWszENLXACo0T2ZuP1MOZHLMLFp1w6Rkqvr7j2ukgi4PHj1Wcsv3WYyj/KH4XCeB4j7oFTZbCZEz3+5WjWO+CQIcLwMt7WORHqhMfac9e8FWzhJSP8ACM1DfBRaMDkosqY3ptK5JIE5R79V1pHhw8VUm5HOy9Dmj3mPM9ZC4DoeV1Zx4efoqAZQZ4HjPqgsCpUdI42VclVuXBAGqfTge8XXHdpvguvBMjXT6KlA2hB2i4x3IjH3EoVHhr7CvVEOZncjjClHmwLrUwaz2WKewxXi067b2EK06RWRhStOi5dcWKeplMMSlNyLUq7rSeAK0jxm1n71Zx/qPqndnhZlQy6ea2MC1cce3S9NWgnaaVoBOUwuzmM1ECo1XCou1dVWqyo4vO/GY/lNPB482uXoVj/FNIuw74zEO8CJ8pUpHk8PUDgJz170YDRZdMiQbjqbhPg35KNuPdmPsqfLtobeyi1VKRjrlKvaFXMcRw95qY2k51IkSXM7Q/qjMRzEjqE85quxqml27gn2puGTmjqQuuG65zdJkdb/AFQ8F/7beVRw8gmtp0rtIzgT4R9FZf07S9gEhRU3eXkop7GjYdoeqhv4+/qiFiqQb+XRd2HC0oT3Z8R2vXL3qmGXULLg+4KAJvlyPjK7BRKY4kWmZNozmeC2aGBpboc5xggRoT0OXr3JaPO1xBBsO+BPITmq08I/eJa10G9wW/8AdHsre+Wb/Kpho1dmT/qec/FZ+JpVCCN9pm0Ek317QtEFZt0E2UHA7xAB4EgelkR9FxAJLRBH5rDmTCDi6NdrSGtpuEWu6QeMRB7kpV+JmU2OFSgZG7DW9qQTFy4AtI559CuV8+MuruAD8IATM5nunhMBWp04y+i3xWpvb2SxzT+mHA66W1CVqUmi4aI4Qs3FrYeHeRofX0Wlh6wNpvwNj4FZ1J40t74p6k+bETyKdDRplA2xXimRxsu02fpMcjdv3HRZO18RvGOHW+sHX90yuoYzlnUWy5buEYsrBU7rcwzVjCNZHKITbEvSCZYurAoVwqBXCos1WVQFZUcKXxlLfY5p1BHiITBVXBB8ue0tdzBII56pnBVNNNPsmvifCblcnR3a66+fqkaTpFtPIrG9Ro3iKgaLg9AT6IrWgjiEJrGvEFXwtBrLNVlWrBpvMKzOC7UbrohsbmW8yZP3VvCDMbFNv9T3u6Tug9YlP7QAsD+lno6fUJejRLnsYLwGt8LT9UxtMy8gaT9v/wAg9VZxC80luqLu8opqAxKnBRq5vhdmFqZgkW5e/FXe5LVasQecfY++Kv8AOkSoA4/DGpTfTBh+7APGDMdYjqtXA41tRgebEQHNObHAXaR6cQZWBidsMbW+SDNXcLhlEC8G8z01WlSa15JBLXx+IZOHMcb6cepzcjXLT3y4Z24fskaZl3DRGwriM78x9pTYaw3tPgfNRVBTssfbmym1GEmAQLHOdYPESvQbiBXpypZLOR4vC7MxVDF2h9J7e0QWsaCAO0aYF3yMxEg8oW1UaRncagarTbT/ABOOZ+iVrhZmOicM9xk5QtJr97I3WfUXaNXdMypa00XYjdbJF+H2WLWdJ4/U6lO46vN9It3+/ok8OySueV3w1jwfwVJa9FtknhWLQphbxjFHphHYgsR2LaCBWCqFYIDNFlUhWZkuuFlQMrhUlRBg/FWBL6W80S5naAGZGo98F5ACIaIjXWXaweVx48V9JqNleB2hhBRquaAYzgZbp16fRYyx3YodFwaU7RhwDhkeIIjoYKTbHHkP7cU3QqAWKqjtboV3ca2fPu0HX6LlVosR3iNdL8vsi4HCmq/dHGSfUqh/Y9GGurOtmG9/HoFmmpvEm4+2i09uYloaKTMmi8e8z7zWDUqxmfr6JakhstUQhU5qIofzINyeKSxu2G057L3EfpY+CLTDojz0Tj2C3elNpYwsHZYXO0H7rrl1wxpmV/iek5jhTfD7FoexxBIIO6QONwqYL4oa9o/lucSDv7hDtwyItqD3rLds+tinhz7AFwBy3JnIaXtxuszZuzq7HVW0iab6ZyFt6wyix46rzX+rvv8A1/1r1/lp7Ux7HYqnWPYDBA3zdxifwR2Y3j5Fen2VtYEh2h7TbzYyPCxse9fM8TsitP8ANeQTcxdxmcye5a+yTUpPbNRzmBu7ukkhomxA0j0XHxzyTK5ZXv5wTF9Vw+JYbtMJ9lZeHw+KjVbOExx4r0zNbHogRw8FHO71n0sUjfxHNa2yvU6pSsy07p75I+qvVxJ4rOxOKPErFykXQOIA/T6/VBpOuAIzS9eupgHzUb19CuN8nLWj2ONxyRMG1CriXJnChTG7q3pqUAnGJOgU2wr0RzMNRmIDCisKoMF0KoK7KBlish0zZXVAF1R+aiDjl4z/ABBwp3GPGQO67r+EnuM+IXsisH4zB/gsSWiXCk8tETLg2W2/1ALl5sPfC4zhL0+d7NxlZ9UzBZcfhAvoGnXqvRNYfzgW/Lw/1H6D+9MPSbQ3vy8XOJtYSBoLzcX5oFCm/Eu3GAtp8ciRxJ/K33ouGGGeM1nlu/n5+xOO2jhHurODadzMEj0Hu3SF6V1RmGp7rYLzYnnwHIe7lY1fG0cHR7NhEBzbOqR+Wn+lnF56XhY7MZXqNDnBjRHZibRkAJNv7r0e0xvre1l3WjUeT2iDM35oPzgUPD17Q7P34K9WnOp5XjotNoardc+qip8rkPP7qKBndsFVWlVbmu22C/yomLSffokqtDdqb4H4s+kR6R1WsRr7zS1alI8QfG3omx574kbvBoDbggzymEph8IWVN3lvMJ5HI9F6R9Gc+Y6ELOxmHMCJlpkc49jxU9Zbs38JPxQ+Y5otBFuRAMjrZPYXFGYH3WC/Z+IxGIa2iwl35jeGjKXO0Hna0r6JsX4dFIdo7zvzOjPkBoFwz4rUquwqfzXEOkQJ4L0LNnM4eZVsLhWNBLRBMSUdjrrPtTRHamzGCm5wsWtLs7WEwfBeJr4pe9+Inf5WsR/8bz4NJK+SvxnNYzvKxouqpjZr/wCY3r6LFOLAWZhviP8AzVIN/AHgOPHe7MCcwN4ErMnCvpVKne6MWgGylFsgFXrNyTApik5NU3JCkUzTcvRKxTzHIzXJWmUZpW0MByvKA0ogKA9J8KzqiACugqgkqSqypKDpKw/iqs1tB28CQ6AQJmJk5LacV5r4nqB26yTeTaJEfmAPCVKMjG4tm68uY7cO6bNktlzpLmi5Z+EG1ib5rSxOLoUaDTTc2o5wtTBhrnR+fVwH6TwXltofDpe3ea97qgEguM7wz7PpyWE0vcQyDvb0EHMHUELj5PLfH85rGVom0do4qoS58vJJzbAAv2RGTY05JvD7TfTaA7eDeYsOU6fstClhC0y2Y4GDxz5Tr3pmuw2kNAjQ3B4AcV554ct79q16fy7gNr0atg5u9qN5pPPIrRcbZSFlMphxF7i+gPfbRPYcEWufei9WO9cukifPPA+X1XEaOaiuzS7VwuuuyqP9F2YXD1Vw49yG12aq+rmgjnRzvH9/MIFdSvVF+fsFLGuDwH91YV6X4PpBoqENAki+pgZHkPqVqtddZHwpW7DhzPoCtMG68nlv6msejrHWKthzdAYbELtF0Fc5eWjOMpB9JzP1Nc3/AKgR9V8f2r8E49hHyiyo05kg0yy+ZBJkAXsZztx+xfMEZoG0HQwplfpH5r2lRxbH7ldrmnVtgCOIcJDhzFrFEwmzwXAl0AjqHCzY5QT/ANK+h/Hnw/WxDWuptndD5G9Dr7sRocuK8JWwz2Ohwcw5wQWme4qYZbi2Prvw5jhUpNvJFj36rRc2+dl84+Ftp/JcN50tdFzx0JX0ii8ObI1TqoqAjMKFTKIF3xrNNUyjtKUplHaV0ZHBRA5ADlcOVB2lXBS4crbyIPKm8g76o6oqL1Xrwu0tpNq1XFjmu3HbtrxEyZyB/EvSbVxkDdGZB6DivN4XD0wHltMN7UWjt2EmAeJIvwUUqdpfMhtMzrv70CLwWkSTfWQbETdExmGdWYWVKrQTk4U27wIO81wd+oEA2gWRn7NpSA0FhaDZv4YJMSIvrYQuMwL3EWYeZt5Ll5JnenTH1+k9nYwuBFQAVGHdeACb2hwt+Bwhwk2B5Ji3PLIEnLu108EPbGzXUt3EBshgiqGkkml+rmWG/dvIz274zsRYi+kgg8+KmO/vZdfA9wGC0w4eaJ/Eu4W0I8Mkq0gdomMrmRfK4nof2TNNrTMEAHKIifpx9ham0F+a833QouGo0WLmzzLQVFeQenVBAdofqh1ay62n2RPAeOSE6gfynPQ6/ZdLkzpZlUEwhVwUSjR1gjv0jijGjKSjDrOdB7h+3mkcRtJ9EtqMsZGcEHOQRqt6vhj5emS8/wDEOF7BJ/L2gfIj3yWfLLcLpce+XtfhnbLcQS4N3XBjQ4aEkn8AGQtlzW2baHovC/4ZgGo8z+QR1Ofvivoq8lxuU3a3dSvN/G2KxDcG/wDhabn1nFrQGiS0HN8awPMheF2NU2gIZicLibWDw1zmnvANu8W7l9dcqlYz8OOU1SZ6Z3w40tpglpBM5tII8VrPk6KvzIaTw+yDSxzbczA9VMcZhrEt3y67CE5BJ4zY7Htio1rhwIBHmtQYrkltoVD8t5aLhriO8AldfWJt8XxZYK1VtMQwPduDO0xmb53/ANy39hbeLBuOJjidORXkfiep/Dua1ol+Z5CRII5j0WOduuDhI7JEOETBE9ocZkSOSmrprT7lhsUHXlNNcvlOyNtVqBh0mmctQO48F7fZ236b47QBPGPXVawyZsela5Ga9ZtPFgixlGbiAu8rmfDlcPSbKyuKi0Gw9T5iV+ag18a1kbzg2cpPKbcbKofNRJ4vGhvM8B7yWHtza9RjPmUgCyWhz3TugFwEiNOfMWKYoubVbvsM6gmbjQx5dJ1SXnS6Aqh7nyTDcz+qZEAaAIxAiMgM1yoYu45cvUa5K1MEwTaNOHfCoG5kZG5N+XuyIKsDe0yH081Kk55HLohuNxHWDwyQaFGpaDBEEEHIjIrzlGl/Dv8A4c3Zc0iTmyZ3d7i3rpxW0x3ob6jvQds4P5rIaYe2HMOXaAyngcvA6LOU+z41L8KVmjuJzyg94WdUwtMT2YOVxMa65G1iPsmmk16YcIa5pgyNRZzXDTLpHJdIIG6YJPTKB0hTs6Zv/qDm2iYtIj6lRTEscHH+Wc1FNLtoYzHuaQGgdoAgm+UAnO2fkVo0mvaB8xoybJBm5sZHCYyn8XKTxRMebS9QPB4ptQOLCbGCHD8JHr4ooIuBouKK43clTKatQhZ21Nnh7SCTGXj+8Lqi0jI/w93qWMNM/hLHj/cC13h2T4r6a/EtGZjoVFFwxnDWfa4qAqrnrqitjO2Rt7ajaVMybmALG5uV5jZ+2yYkRDmnv4+q4ovn+f8Av/w74dPe0zIRQNFFF73F85PwZTqvqOqky6o6NywbBcHTvEl3a5DW5EBKu+AMNkHPG6TM7pntEtva8FoNtOa4or6Y6a97sPCfB76B/l1GPYc6b2lgmCQQ5pMOm05J/DbBpu7TZY4k2EWc2A5p0dBtPgoorMIlytXdgKrN24hzt25gtdEgEibHiB3pHEjGipDam7eAJa/IOOZGXYP7KKJcUP7KxuI3nCqXEB7Wdn5YO9E+F2/staljJG9/NIgEAOY2xEi91FFZS4m8OS6HBxAIkSd8+Dmx5JKhs9rhUDyTVY4gP4ZPpuAuBaJHI6KKLeukN4ctr0iHjsvDmPbwcC5jwCOYN+4rO2OfkOOGeZLN4sOc0zeOsON4uBooopflWfY0q2HaHTutm8GBN8780B2LaPLTU6D3qoonlyuGFyjFqUMVvmA3Ly6Ipje7wfUfddUWfBlc8PakXAurhdUXcYW16XyKnzhPy6rt2oP0vIs9vfE+PFMCkQYddriczkTpEa3Kii5Ti2N/AnyDe/guqKLSP//Z',
      descricao: 'Não aguenta? Beba Leite!',
      quantidade: 2
    },
    {
      id: 'boazinha',
      nome: 'Cachaça Boazinha 1L',
      preco: 50,
      img: 'https://www.prabarbebidas.com.br/img/products/cachaca-boazinha-670ml_1_1200.jpg',
      descricao: 'Evento especial? Leva uma Boazinha!',
      quantidade: 1
    }]
  })
}
</script>
