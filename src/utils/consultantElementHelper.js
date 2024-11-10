import FireElementImage from "../assets/images/elements-image/fire.png";
import MetalElementImage from "../assets/images/elements-image/metal.png";
import WaterElementImage from "../assets/images/elements-image/water.png";
import EarthElementImage from "../assets/images/elements-image/earth.png";
import WoodElementImage from "../assets/images/elements-image/wood.png";

const getElement = (elementName) => {
    switch (elementName) {
        case "Hỏa":
            return {
                title: "Hỏa",
                image: FireElementImage,
                style: {
                    boxShadow: "0 0 25px tomato"
                },
                life: {
                    character: "Người mệnh Hỏa có tính cách năng động, sáng tạo và quyết đoán. Họ thường có nhiều ý tưởng mới và có khả năng đưa ra quyết định một cách nhanh chóng. Tính cách năng động và sáng tạo giúp họ thích khám phá và tìm kiếm những trải nghiệm mới. Người mệnh Hỏa cũng có tính cách trực giác và đam mê. Họ có khả năng nhận biết và cảm nhận được những điều không rõ ràng và luôn tìm kiếm sự đam mê trong cuộc sống.",
                    generationAndInhibition: "Người mệnh Hỏa hợp với mệnh ngũ hành Thổ và Kim. Mặt khác, họ khắc mệnh với mệnh ngũ hành Thủy. Điều này có nghĩa là họ có thể gặp khó khăn trong mối quan hệ với người mệnh Thủy. Tuy nhiên, họ có thể học hỏi và bổ sung những đặc tính của mình bằng cách hợp tác và trao đổi ý kiến với những người mệnh Thủy.",

                },
                fengshui: "Nhiều người cho rằng Hỏa là lửa, kỵ với nước nên không thể nuôi cá koi cảnh. Tuy nhiên theo kinh nghiệm trong dân gian truyền lại rằng, những người có bát tự thiếu thủy hay hợp thủy vẫn có thể nuôi cá, còn người có bát tự kỵ thủy thì không nên nuôi.\nNước trong bể cá đại diện cho hành Thủy, còn đất, đá, sỏi, cát là Thổ, các cây thủy sinh trồng trong đó là Mộc, Kim là khung kim loại của bể còn Hỏa là màu sắc của cá và hệ thống đèn chiếu.\nNgười mệnh Hỏa nên nuôi các dòng cá koi có màu sắc thuộc bản mệnh Hỏa như màu đỏ, hồng, tím. Một số dòng koi phù hợp là: Benigoi (đỏ toàn thân), Kohaku (đỏ – trắng), cá koi Sanke, cá koi Showa (đen – đỏ – trắng)…\nKhi đặt bể cá, người mệnh này nên đặt theo các hướng Nam, Tây Nam và Đông Bắc là phù hợp phong thủy nhất."
            }
        case "Mộc":
            return {
                title: "Mộc",
                image: WoodElementImage,
                style: {
                    boxShadow: "0 0 25px #69db58"
                },
                life: {
                    character: "Người mệnh Mộc có tính cách năng động, sáng tạo và thích thử thách. Họ thường đam mê khám phá và tìm hiểu những thứ mới mẻ, và luôn sẵn sàng để thử nghiệm những ý tưởng mới. Đồng thời, họ cũng rất độc lập, linh hoạt và thích nghi nhanh với mọi tình huống. Họ có thể thích nghi với nhiều môi trường khác nhau và có khả năng tìm ra giải pháp cho các vấn đề khó khăn. Người mệnh Mộc thường đam mê học hỏi và phát triển bản thân. Họ luôn cố gắng học hỏi từ những người xung quanh và tìm cách phát triển kỹ năng và năng lực của mình.",
                    generationAndInhibition: "Người mệnh Mộc hợp với mệnh ngũ hành Thổ và Hỏa. Mặt khác, họ khắc mệnh với mệnh ngũ hành Kim. Điều này có nghĩa là họ có thể gặp khó khăn trong mối quan hệ với người mệnh Kim. Tuy nhiên, họ có thể học hỏi và bổ sung những đặc tính của mình bằng cách hợp tác và trao đổi ý kiến với những người mệnh Kim.",

                },
                fengshui: "Theo quan hệ tương sinh trong ngũ hành thì Thủy sinh Mộc, mà bể cá đại diện cho Thủy. Như vậy, người mệnh Mộc muốn phát triển sự nghiệp, công việc thuận lợi, suôn sẻ thì nên nuôi một bể cá cảnh trong nhà. Với sự hỗ trợ đắc lực của Thủy sẽ giúp Mộc gia tăng được nhiều vượng khí tốt, mặt khác bản thân màu rêu, cây thủy sinh trong bể cá màu xanh lục (màu bản mệnh Mộc) nên cũng mang lại nhiều may mắn cho gia chủ.\nNgười mệnh Mộc thích hợp với những con cá màu xanh lục (màu bản mệnh Mộc), ngoài ra do Thủy sinh Mộc nên người mệnh này cũng có thể chọn cá koi mang màu sắc đặc trưng của mệnh Thủy như: đen, xanh nước biển. Một số dòng cá koi người mệnh này có thể lựa chọn để nuôi là: koi Karasu (đen), koi Shiro Utsuri, (đen – trắng), koi Goshiki (đen – đỏ)…\nMàu sắc bạn nên tránh khi mua cá koi phong thủy đối với người mệnh mộc là trắng, xám, ghi bởi đây là màu đại điện của mệnh Kim trong khi Kim khắc Thổ, không mang lại may mắn cho chủ nhân.\nĐối với người mệnh Mộc thì hướng đặt bể cá phong thủy và phù hợp nhất vẫn là hướng Bắc, Đông, Nam, Đông Nam. Khi bạn sắp xếp và bố trí các cây cảnh, sỏi đá… trong bể cá thì nên trang trí tự nhiên, hạn chế đặt các đồ vật nhân tạo trong bể cá."
            }
        case "Thủy":
            return {
                title: "Thủy",
                image: WaterElementImage,
                style: {
                    boxShadow: "0 0 25px #699dd5"
                },
                life: {
                    character: "Người mệnh Thủy có tính cách uyển chuyển, linh hoạt và sâu sắc. Họ thường có khả năng cảm nhận và hiểu biết sâu sắc về những người xung quanh và thế giới xung quanh mình. Tính cách uyển chuyển và linh hoạt giúp họ thích thích ứng với môi trường và thay đổi. Người mệnh Thủy cũng có tính cách nhạy cảm và tình cảm. Họ có khả năng đồng cảm và chia sẻ với những người xung quanh và thường tạo ra một môi trường hòa đồng và ấm áp.",
                    generationAndInhibition: "Người mệnh Thủy hợp với mệnh ngũ hành Kim và Thổ. Mặt khác, họ khắc mệnh với mệnh ngũ hành Hỏa. Điều này có nghĩa là họ có thể gặp khó khăn trong mối quan hệ với người mệnh Hỏa. Tuy nhiên, họ có thể học hỏi và bổ sung những đặc tính của mình bằng cách hợp tác và trao đổi ý kiến với những người mệnh Hỏa.",

                },
                fengshui: "Người mệnh Thủy khi chọn cá nên chọn những con cá màu đen, xanh nước biển (màu bản mệnh Thủy), bên cạnh đó bạn cũng có thể chọn cá có màu thuộc hành Kim: bạc, trắng, ghi, xám bởi vì theo quan hệ tương sinh thì Kim sinh Thủy. Ngoài ra những giống cá màu đỏ, hồng, tím bạn cũng có thể lựa chọn bởi màu sắc này đại diện cho hành Hỏa mà Thủy có thể chế khắc được Hỏa. Lựa chọn cá màu sắc hợp mệnh của chủ nhân có ý nghĩa tích cực, giúp chủ nhân gặp nhiều điều suôn sẻ.\nMột số dòng koi người mệnh này nên nuôi là: koi Kohaku (đỏ – trắng), koi Sanke, koi Showa (đen – đỏ – trắng), koi Benigoi (đỏ toàn thân), cá koi Shiro Utsuri (Đen – trắng), Mukashi (màu trắng bạc), Platinum Ogon (trắng)…\nNgười mệnh Thủy hạn chế chọn những con cá koi có màu nâu hay vàng đất bởi màu sắc này thuộc hành Thổ. Trong ngũ hành Thổ khắc Thủy bởi vậy nếu chọn cá màu này gia chủ rất ốm đau, gia đình lục đục, làm ăn thất bát.\nHướng đặt bể cá, hồ cá phù hợp cho người mệnh này là hướng bắc, thuộc cung Quan Lộc, sẽ mang lại sự may mắn; hoặc hướng đông nam, thuận cả cung Tài Bạch và Điện Trạch, sẽ mang đến phú quý, thịnh vượng cho gia chủ."
            }
        case "Kim":
            return {
                title: "Kim",
                image: MetalElementImage,
                style: {
                    boxShadow: "0 0 25px gray"
                },
                life: {
                    character: "Người mệnh Kim có tính cách quyết đoán, kiên định và nhạy bén. Họ có khả năng phân tích và đánh giá các tình huống một cách nhanh chóng và chính xác. Tính cách kiên định và quyết đoán giúp họ đạt được những mục tiêu của mình một cách hiệu quả. Người mệnh Kim cũng có tính cách sáng tạo và thích khám phá. Họ có khả năng tìm ra những giải pháp mới và khác biệt cho các vấn đề khó khăn. Ngoài ra, họ cũng rất độc lập và tự tin, có tính cách lãnh đạo và thích đảm nhận trách nhiệm.",
                    generationAndInhibition: "Người mệnh Kim hợp với mệnh ngũ hành Thuỷ và Thổ. Mặt khác, họ khắc mệnh với mệnh ngũ hành Mộc. Điều này có nghĩa là họ có thể gặp khó khăn trong mối quan hệ với người mệnh Mộc. Tuy nhiên, họ có thể học hỏi và bổ sung những đặc tính của mình bằng cách hợp tác và trao đổi ý kiến với những người mệnh Mộc.",

                },
                fengshui: "Kim đại diện cho kim loại với 2 màu bản mệnh là trắng, xám, ghi, bởi vậy người mệnh này nên chọn các dòng cá koi mang màu sắc này để gia tăng vượng khí, giúp công việc thăng tiến, cuộc sống gia đình thuận lợi. Một số dòng cá koi mang màu sắc này có thể kể đến như: koi Mukashi  (màu trắng bạc), koi Platinum Ogon  (màu trắng).\nDo Thổ sinh Kim nên người mệnh này cũng phù hợp với dòng cá koi mang sắc nâu đất, vàng. Một số dòng koi bạn có thể tham khảo là:  koi Shusui (màu vàng), koi Yamabuki Ogon  (màu vàng kim), koi Chagoi  (màu nâu trà).\nMệnh Kim nên hạn chế chọn các loại cá cảnh có màu tương khắc như màu đỏ, màu hồng, tím. Đây là những màu của mệnh Hỏa, mà trong ngũ hành thì Hỏa khắc Kim. Nuôi những loài cá có màu sắc này có thể sẽ ảnh hướng xấu, giảm tài lộc cho người mệnh Kim.\nHướng đặt bể cá cho người mệnh Kim quay về các hướng tốt như hướng Tây Bắc, Bắc, Đông Nam để mang lại vượng khí."
            }
        case "Thổ":
            return {
                title: "Thổ",
                image: EarthElementImage,
                style: {
                    boxShadow: "0 0 25px #e8ca49"
                },
                life: {
                    character: "Người mệnh Thổ có tính cách bền vững, kiên định và chăm chỉ. Họ thường có khả năng kiên trì và sẵn sàng làm việc chăm chỉ để đạt được mục tiêu của mình. Tính cách bền vững giúp họ có thể vượt qua những khó khăn và thử thách trong cuộc sống. Người mệnh Thổ cũng có tính cách thực tế và hợp tác. Họ có khả năng áp dụng kiến thức và kinh nghiệm của mình để giải quyết các vấn đề thực tế và xây dựng mối quan hệ tốt với những người xung quanh mình.",
                    generationAndInhibition: "Người mệnh Thổ hợp mệnh với mệnh ngũ hành Nước và Mộc. Mặt khác, họ khắc mệnh với mệnh ngũ hành Hỏa. Điều này có nghĩa là họ có thể gặp khó khăn trong mối quan hệ với người mệnh Hỏa. Tuy nhiên, họ có thể học hỏi và bổ sung những đặc tính của mình bằng cách hợp tác và trao đổi ý kiến với những người mệnh Hỏa.",

                },
                fengshui: "Theo như luật tứ hành xung khắc trong phong thủy thì Thổ khắc Thủy, chính bởi vậy nhiều người cho rằng mệnh này không nên nuôi cá cảnh.\nTuy nhiên trên thực tế các chuyên gia phong thủy cho biết người mệnh Thổ hoàn toàn có thể nuôi cá koi cảnh nếu thích. Điều quan trọng là chủ nhân phải chú ý đến màu sắc, hướng đặt bể cá phù hợp phong thủy và mệnh của mình.\nViệc nuôi bể cá trong phòng khách giúp gia chủ cân bằng ngũ hành: Kim, Mộc, Thủy, Hỏa, Thổ trong nhà, mang lại vượng khí tốt cho gia chủ, tránh những điều xui xẻo và không may mắn trong cuộc sống.\nTheo quy luật tương sinh Hỏa sinh Thổ nên người mệnh Thổ thích hợp với những loài cá màu đỏ, vàng, tím (màu sắc thuộc mệnh Hỏa). Cá koi màu vàng, nâu đất cũng sẽ mang đến nhiều may mắn, tài lộc cho chủ nhân mệnh Thổ bởi đây là màu bản mệnh của người mệnh này.\nMột số cá koi hợp phong thủy với người mệnh này là: Shusui (đỏ), Yamabuki (màu vàng kim), Chagoi (nâu trà), Benigoi (đỏ toàn thân), Kohaku (đỏ – trắng), cá koi Sanke, cá koi Showa (đen – đỏ – trắng)…\nHướng đặt bể cá cảnh hợp phong thủy với người mệnh Thổ là các hướng Tây Nam và Đông Bắc./n**Lưu ý**: Thực tế thì không phải cứ mệnh nào chỉ chọn cá có màu sắc tương sinh, tương hợp với người mệnh đó. Gia chủ vẫn có thể chọn thêm cá mang các màu tương khắc với mình nhưng với số lượng ít, không át với màu hợp phong thủy là được. Chẳng hạn người mệnh Hỏa không nhất thiết cứ chọn những dòng cá koi màu đỏ, hoàn toàn có thể chọn thêm 1 – 2 con màu đen (thuộc hành Thủy, Thủy khắc Hỏa) vẫn được để tạo sự cân bằng trong ngũ hành. Mặt khác việc phối hợp nhiều dòng cá koi với màu sắc đa dạng cũng sẽ giúp hồ koi trông sinh động và bắt mắt hơn."
            }
        default:
            break;
    }
}

const getTankConsultant = (tankName) => {
    switch (tankName.toLowerCase()) {
        case "hình chữ nhật":
            return {
                info: "Hình chữ nhật – thuộc hành Mộc: Hình chữ nhật thường đại diện cho sự phát triển và tăng trưởng, phù hợp cho người mệnh Mộc và Hỏa, mang lại năng lượng dồi dào và thúc đẩy sự nghiệp thăng tiến."
            }
        case "hình vuông":
            return {
                info: "Hình vuông – thuộc hành Thổ: Hình vuông tượng trưng cho sự ổn định và bền vững. Hồ hình vuông phù hợp với người mệnh Thổ và Kim, giúp củng cố tài lộc và sự ổn định trong cuộc sống."
            }
        case "hình lục giác":
            return {
                info: "Hình lục giác – thuộc hành Thủy: Hồ cá Koi lục giác đại diện cho sự linh hoạt và mềm dẻo, phù hợp cho người mệnh Thủy, giúp cân bằng năng lượng, tạo ra sự bình an và hạnh phúc."
            }
        case "hình góc nhọn (tam giác, ngũ giác...) – thuộc hành Hỏa":
            return {
                info: "Hình góc nhọn (tam giác, ngũ giác...) – thuộc hành Hỏa: Các hình có góc nhọn tượng trưng cho sự mạnh mẽ và quyết đoán. Tuy nhiên, hồ cá với góc nhọn có thể tạo ra năng lượng không ổn định, dễ gây xáo trộn, nên cần hạn chế sử dụng trừ khi thật sự phù hợp với mệnh Hỏa."
            }
        case "hình tròn":
            return {
                info: "Hình tròn – thuộc hành Kim: Hình tròn đại diện cho sự viên mãn và hài hòa, phù hợp cho người mệnh Kim và Thủy, mang đến sự hòa hợp và thịnh vượng, giúp gia tăng phúc khí và tạo cảm giác bình yên."
            }
        default:
            return {
                info: "Chưa xác định"
            }
    }
}

export { getElement, getTankConsultant };