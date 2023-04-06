import styled from "styled-components"
// import * as palette from "../../styles/variables"

export const GoogleReviewsSection = styled.div`
padding: 5.5vw 2.8vw;
  .review_title {
    display: flex;
    align-items: center;
    margin: auto;
    gap: 0.9vw;
    width: fit-content;
    .google_icons {
      width: 2.6vw;
    }
  }

  .review_card {
    display: flex;
    align-items: center;
    gap: 1.4vw;
    margin-top: 4.4vw;
    .review_card_user_container {
      padding: 2.3vw 1.18vw;
      max-width: 37.4vw;
      height: fit-content;
      background: #ffffff;
      box-shadow: 0px 0px 0.5vw rgba(21, 39, 73, 0.15);
      border-radius: 0.5vw;
      .review_card_name_container {
        display: flex;
        align-items: center;
        position: relative;
        gap: 1.5rem;
        .user_avatar {
          width: 5.9vw;
        }
        .name_container {
          gap: 2vw;
          .user_name {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 600;
            font-size: 1.3vw;
            line-height: 2vw;
            color: #1565c0;
          }
          .date {
            font-weight: 400;
            font-size: 0.8vw;
            line-height: 1.2vw;
            color: #200e32;
          }
        }

        .user_google_icon {
          width: 2.2vw;
          position: absolute;
          top: 0.7vw;
          right: 0.7vw;
        }
      }

      .review_card_rating {
        color: #f6bb06;
        margin-top: 0.8vw;
      }

      .card_desc {
        p {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 1.1vw;
          line-height: 1.7vw;
          color: #1f173a;
        }
      }
    }

    .review_card_user_container:nth-child(1) {
      padding: 1.4vw 1.1vw;
    }
    .review_card_user_container:nth-child(3) {
      padding: 1.4vw 1.1vw;
    }
  }
`
