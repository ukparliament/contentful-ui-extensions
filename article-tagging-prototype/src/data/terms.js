'use strict';

const termsPromise = (() => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        text: "Timings",
        children: [
          { id: "abDg67f3", text: "New Parliament " },
          { id: "ndbs63k2", text: "End of a Parliament" },
          { id: "ncueK234", text: "Queen's Speech" },
          { id: "asdUnc41", text: "Prorogation" },
          { id: "Cu2mcc24", text: "Sitting times" },
          { id: "cnjkai12", text: "Typical day" },
          { id: "asdjj21Q", text: "Recess" }
        ]
      },
      {
        text: "Debates and Voting",
        children: [
          { id: "jas123J1", text: "Rules and courtesies" },
          { id: "sjdawe21", text: "Points of Order" },
          { id: "mjajsdJ2", text: "Voting" },
          { id: "asdjnJ41", text: "Speaking in a debate" },
          { id: "dagh23F2", text: "Ending a debate" },
          { id: "asdMK12e", text: "General debates" },
          { id: "aajewe23", text: "Substantive motions" },
          { id: "knwnJnsb", text: "Opposition day debates" },
          { id: "aq2unbCN", text: "Adjournment debates" },
          { id: "gihkdK2f", text: "Westminster Hall debate" },
          { id: "bvjw1E23", text: "Backbench Busiess Commitete debates" },
          { id: "acsmghjL", text: "Emergency debates" }
        ]
      },
      {
        text: "Questions",
        children: [
          { id: "kasdASND", text: "Written quesitons" },
          { id: "MCNJ1md1", text: "Oral questions" },
          { id: "caKKMN1e", text: "Prime Minister's questions" },
          { id: "a189uMCa", text: "Business questions " },
          { id: "gknraM12", text: "Urgent questions" },
          { id: "CMkj1cq4", text: "Deadlines" },
          { id: "gqmkjak5", text: "Rules" },
          { id: "41MHgkq1", text: "Problems" },
        ]
      },
      {
        text: "Early Day Motions",
        children: [
          { id: "asdj1JCF", text: "Submitting an EDM" },
          { id: "kjsadj1C", text: "Signing an EDM" },
          { id: "iqpRm141", text: "Amending an EDM" },
          { id: "aPkikm1d", text: "Withdrawing an EDM" },
          { id: "gKA1nC12", text: "Rules for EDMs" },
          { id: "17vmaJ12", text: "Publication of EDMS" },
          { id: "vh151cmJ", text: "EDMs and delegated legislation" }
        ]
      },
      {
        text: "Bills and Delegated Legislation",
        children: [
          { id: "Acaj1nv1", text: "Bill Stages" },
          { id: "jvmaca11", text: "Find your way around a Bill" },
          { id: "8vckacCN", text: "Amendments" },
          { id: "p1dcqCJa", text: "Public Bill Committees" },
          { id: "p11cmcHk", text: "Legislation and the House of Lords" },
          { id: "ajaCmnq1", text: "English Votes for English Laws (EVEL)" },
          { id: "p1jkcn1f", text: "Private Members' Bills" },
          { id: "ap1dlm1c", text: "Private and Hybrid Bills" },
          { id: "APAcnn12", text: "Delegated Legislation" },
          { id: "1021emd1", text: "Selection Committee" }
        ]
      },
      {
        text: "Petitions",
        children: [
          { id: "dtZWTcC9", text: "Paper Petitions" },
          { id: "cXSRzVh3", text: "E-petitions" },
          { id: "uGuRG2d5", text: "Petitions Committee and debates" }
        ]
      },
      {
        text: "Statements",
        children: [
          { id: "Ioamc124", text: "Oral statements" },
          { id: "Poacj12G", text: "Written statements" },
          { id: "Ilkcnas1", text: "Speaker's statements" },
          { id: "91ucj1CB", text: "Select Committee statements" },
          { id: "soq1kdfq", text: "Personal statements" }
        ]
      },
      {
        text: "Select Committees",
        children: [
          { id: "1j1cn3Cd", text: "Members" },
          { id: "pCKmasn1", text: "Chairs" },
          { id: "ColMNSD1", text: "Role" },
          { id: "VJ1odc1C", text: "Meetings and papers" },
          { id: "Pkacnnq1", text: "Inquiries and witnesses" },
          { id: "INamcn1D", text: "Reports" },
          { id: "PCLqm1cm", text: "Powers" },
          { id: "0akcjajC", text: "Staff and Specialist Advisors" },
          { id: "AKCJ1c1E", text: "Types of Select Committee" }
        ]
      },
      {
        text: "European Security",
        children: [
          { id: "Coqj1cnA", text: "European Scrutiny Committee" },
          { id: "CPk1cmKa", text: "Debate in Chamber on European document" },
          { id: "CAi1poco", text: "Debate in Committee on European document" },
          { id: "alc1p1CL", text: "Other forms of EU scrutiny in the House of Commons" },
        ]
      },
      {
        text: "Money",
        children: [
          { id: "Gjkacjqi", text: "Budget" },
          { id: "GOpDM2CC", text: "Finance Bill" },
          { id: "AP1J1CSD", text: "Spring Statement" },
          { id: "CKJ1CDEE", text: "Estimates" },
          { id: "0c1k1ida", text: "Estimates days" },
          { id: "sa1ckmnD", text: "Supply and Appropriation Bill" },
        ]
      },
      {
        text: "Privilege",
        children: [
          { id: "opq1kc1S", text: "Principles of Privilege" },
          { id: "VGJ21c32", text: "Freedom of speech" },
          { id: "8guhcMSd", text: "Self-regulation" },
          { id: "Adfqglv1", text: "Other protections" },
          { id: "c1cjasd1", text: "Infringements" }
        ]
      },
      {
        text: "Publications and Records",
        children: [
          { id: "8cjqacMs", text: "Order Paper" },
          { id: "Ckj1nmc1", text: "Future Business" },
          { id: "81uycnsS", text: "Hansard" },
          { id: "19cjcsmm", text: "Votes and Proceedings" },
          { id: "117dcjs3", text: "Standing Orders" },
          { id: "s1d1dMs2", text: "Erskine May" },
          { id: "18cmsE32", text: "Laid Papers" }
        ]
      }
    ]);
  });
});

export default termsPromise;
