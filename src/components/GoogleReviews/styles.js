import styled from "styled-components"
import * as palette from "../../styles/variables"

export const GoogleReviewsSection = styled.div`
padding: 46px 39px;
  .review_title {
    display: flex;
    align-items: center;
    margin: auto;
    gap: 0.9vw;
    width: fit-content;
    .google_icons {
      width: 36px;
    }
  }

  .review_card {
    display: flex;
    gap: 20px;
    margin-top: 60px;
    .review_card_user_container {
      padding: 32px 16px;
      max-width: 505px;
      height: fit-content;
      background: #ffffff;
      box-shadow: 0px 0px 8px rgba(21, 39, 73, 0.15);
      border-radius: 8px;
      .review_card_name_container {
        display: flex;
        align-items: center;
        position: relative;
        gap: 1.5rem;
        .user_avatar {
          width: 80px;
        }
        .name_container {
          gap: 2vw;
          .user_name {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            color: #1565c0;
          }
          .date {
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            color: #200e32;
          }
        }

        .user_google_icon {
          width: 30px;
          position: absolute;
          top: 10px;
          right: 10px;
        }
      }

      .review_card_rating {
        color: #f6bb06;
        margin-top: 12px;
      }

      .card_desc {
        p {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #1f173a;
        }
      }
    }
  }
`
